const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  model: String,
  marque: String,
  ImageUrl: String,
  prix_location: Number,
  Anne: String,
  Immatriculation: String,
  Statut: String,
  Category: String,
  date_Location: Date,
  date_retour: Date,
});
const ClientSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  cin: String,
  permis: String,
  marque: String,
  model: String,
  date_de_demande: Date,
  date_Location_Client: Date,
  date_retour_Client: Date,
});
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  date_de_naissance: Date,
});
const Car = mongoose.model("Car", carSchema);
const Client = mongoose.model("client", ClientSchema);
const User = mongoose.model("user", userSchema);
module.exports = { Car, Client, User };
