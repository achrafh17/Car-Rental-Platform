const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { PORT } = process.env || 3001;
app.use(cors());
app.use(express.json());
const { Car, Client, User } = require("./models/db.js");
//--------------------------------------------------
mongoose
  .connect(
    "mongodb+srv://achrafh17:Achraf2003@cluster0.lsxjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((data) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error conecting mongo db", err);
  });
//-----------------------------------------------------

//----------------------------------------
app.post("/car", async (req, res) => {
  const newCar = await Car.find();
  res.json(newCar);
});

//--------------------------------
app.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const cleanedId = _id.replace("car:", "");
    const document = await Car.findById(cleanedId);
    res.json(document);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Server error" });
  }
}); //---------------------------------------------
app.post("/articles", async (req, res) => {
  try {
    const DateDebut = await req.body.dateDebut;
    const DateFin = await req.body.dateFin;
    const nom = await req.body.nom;
    const prenom = await req.body.prenom;
    const cin = await req.body.cin;
    const permis = await req.body.permis;
    const idToModify = await req.body.carId;
    const marque = await req.body.marque;
    const model = await req.body.model;
    await Client.insertOne({
      nom: nom,
      prenom: prenom,
      cin: cin,
      permis: permis,
      marque: marque,
      model: model,
      date_Location_Client: DateDebut,
      date_retour_Client: DateFin,
      date_de_demande: new Date(),
    });
    console.log("date debut", DateDebut);
    console.log("date fin", DateFin);
    console.log("nom", nom);
    console.log("prenom", prenom);
    console.log("cin", cin);
    console.log("permis", permis);
    console.log("id", idToModify);
    await Car.updateOne(
      { _id: idToModify },
      { $set: { date_Location: DateDebut, date_retour: DateFin } }
    );
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "error" });
  }
});
app.get("/validation/:id", (req, res) => {
  res.send("hey you succed");
});
//----------------USER PART-----------------------
app.post("/signin", async (req, res) => {
  const nom = await req.body.nom;
  const prenom = await req.body.prenom;
  const email = await req.body.email;
  const password = await req.body.password;
  const phone = await req.body.phone;
  const date_de_naissance = await req.body.dateNaissance;
  const address = await req.body.adresse;
  const checkemail = await User.findOne({ email });
  console.log("nom from sigin", nom);
  console.log("email from sigin", email);
  console.log("password from sigin", password);
  console.log("phone from sigin", phone);
  console.log("check ", checkemail);
  if (checkemail !== null) {
    console.log("deja exist ");
    return res.json({ message: true });
  } else {
    User.insertOne({
      name: nom,
      email: email,
      password: password,
      phone: phone,
      address: req.body.address,
      date_de_naissance: date_de_naissance,
    });
    console.log(" non exist ");
    return res.json({ message: false });
  }
});
app.post("/middle", async (req, res) => {
  const email = await req.body.email;
  const password = await req.body.password;
  console.log("email from middle", email);
  console.log("password from middle", password);
  const user = await User.findOne({ email, password });
  if (user !== null) {
    res.json({ message: true, name: user.name });
  } else {
    res.json({ message: false });
  }
});

//--------------------------------------------

app.listen(3001, () => {
  console.log("Server started on port 3000");
});
