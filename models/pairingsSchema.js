const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pairingSchema = new Schema({
  From: {
    type: String,
    required: true
  },
  Brand_Name: {
    type: String,
    required: true
  },
  Vintage: {
    type: Number,
    required: true
  },
  Region: {
    type: String,
    required: true
  },
  Soil: {
    type: String,
    required: true
  },
  Grape: {
    type: String,
    required: true
  },
  Drinking_Temperature: {
    type: String,
    required: true
  },
  Price_Point: {
    type: String,
    required: true
  },
  Cheese_Pairing: {
    type: String,
    required: true
  } //,
  // Color: {
  //   type: String,
  //   required: true
  // }
});

const Pairing = mongoose.model("Pairing", pairingSchema);

module.exports = Pairing;
