const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pairingSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  brand_name: {
    type: String,
    required: true
  },
  vintage: {
    type: Number,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  soil: {
    type: String,
    required: true
  },
  grape: {
    type: String,
    required: true
  },
  drinking_temperature: {
    type: String,
    required: true
  },
  price_point: {
    type: String,
    required: true
  },
  cheese_pairing: {
    type: String,
    required: true
  }
});

const Pairing = mongoose.model("Pairing", pairingSchema);

module.exports = Pairing;
