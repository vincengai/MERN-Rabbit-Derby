const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Map = require("../../models/map");

router.get("/", (req, res) => {
  Map.find()
    .sort({ date: -1 })
    .then(maps => res.json(maps))
    .catch(() => res.status(404).json({ maps: "No maps found" }));
});

router.get("/user/:user_id", (req, res) => {
  Map.find({ user: req.params.user_id })
    .then(maps => res.json(maps))
    .catch(() => res.status(404).json({ maps: "No maps found" }));
});

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  const newMap = new Map({
    user: req.user.id,
    tiles: req.body.tiles
  });
  newMap.save().then(map => res.json(map)); 
});

router.patch("/:id", (req, res) => {
  Map.findById(req.params.id)
    // .then()
    // $set
});