const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { PORT } = process.env || 3001;
app.use(cors());
app.use(express.json());
require("dotenv").config();
let codeSend = crypto.randomBytes(3).toString("hex").toUpperCase();
//-------------------------------------------
setInterval(() => {
  codeSend = crypto.randomBytes(3).toString("hex");
  console.log("New code generated:", codeSend);
}, 3 * 60 * 1000);
//--------------------------------------------------------
console.log("codeSend value:", codeSend);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Usermail,
    pass: process.env.pass,
  },
});
const { Car, Client, User } = require("./models/db.js");
//--------------------------------------------------
mongoose
  .connect(
    `mongodb+srv://${process.env.User}:${process.env.MongoPassword}@cluster0.lsxjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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
//------------------------POUR PROFILE ET AUTHENTIFICTATION
async function midlle(req, res, next) {
  const { email, password } = req.body;
  req.sharedData = { email, password };
  const user = await User.findOne({ email, password });
  req.sharedData.user = user;
  next();
}

app.use("/middle", midlle, async (req, res, next) => {
  // const user = req.sharedData.user;
  // if (user !== null) {
  //   res.json({ message: true, name: user.name, user: user });
  //   console.log("user", user);
  // } else {
  //   res.json({ message: false });
  //   console.log(" no user", user);
  // }
});
app.post("/profile", async (req, res) => {
  const email = await req.sharedData;
  // const password = await req.shareddata.password;
  console.log("from profile", email);
  // const user = User.findOne({ email: email, password: password });
  // res.json({ user });
});
// ---------------envoyer un mail------------
app.post("/passwordrecover", async (req, res) => {
  try {
    const email = await req.body.email;
    const code = await req.body.code;
    const endpoint = await req.body.endpoint;
    console.log("voici le code", code);
    if (endpoint === "first") {
      console.log("code send ", codeSend);
      await transporter.sendMail({
        from: "achrafhafid565@gmail.com",
        to: email,
        subject: "recover password",
        html: `
        <p>code de verification est : ${codeSend}</p>`,
      });
    } else if (endpoint === "second") {
      if (code) {
        if (codeSend.toUpperCase() === code.toUpperCase()) {
          res.status(201).json({ message: true });
        } else {
          res.json({ message: false });
        }
      } else {
        res.status(200).json({ message: "code non fournit" });
      }
    }
  } catch (err) {
    console.log("erreur recover ", err);
    res.status(400).json({ message: "problem d envoie " });
  }
});
//----------------------------ENDPOINT FOR CHANGIN PASSWORD----------------
app.post("/changingpassword", async (req, res) => {
  try {
    const email = await req.body.email;
    const password = await req.body.newPassword;
    const user = await User.findOne({ email: email });
    if (user !== null) {
      await User.updateOne({ email: email }, { $set: { password: password } });
      res.status(201).json({ message: true });
    } else {
      res.status(400).json({ message: false });
    }
  } catch (err) {
    console.log("error changin the password", err);
  }
});

//--------------------------------------------

app.listen(3001, () => {
  console.log("Server started on port 3000");
});
