const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  tiles: [Number],
  date: { type: Date, default: Date.now }
});

module.exports = Map = mongoose.model("Map", MapSchema);