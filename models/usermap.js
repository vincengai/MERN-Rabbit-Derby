const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserMapSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tiles: String,
    date: { type: Date, default: Date.now }
});

module.exports = UserMap = mongoose.model("UserMap", UserMapSchema);