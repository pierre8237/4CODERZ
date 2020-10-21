const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pairingSchema = new Schema({
  From: {
    type: String,
    required: true
  },
  Brand_name: {
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
  Drinking_temperature: {
    type: String,
    required: true
  },
  Price_point: {
    type: String,
    required: true
  },
  Cheese_pairing: {
    type: String,
    required: true
  }
});

const Pairing = mongoose.model("Pairing", pairingSchema);

module.exports = Pairing;
