const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const UserMap = require("../../models/usermap");

router.get("/", (req, res) => {
    UserMap.find()
        .sort({ date: -1 })
        .then(usermaps => res.json(usermaps))
        .catch(() => res.status(404).json({ nousermapsfound: "No user maps found" }));
});

router.get("/user/:user_id", (req, res) => {
    UserMap.find({ user: req.params.user_id })
        .then(usermaps => res.json(usermaps))
        .catch(() => res.status(404).json({ nousermapsfound: "No user maps found" }));
});

router.post("/", 
    passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        const newUserMap = new UserMap({
            user: req.user.id,
            tiles: req.body.tiles
    });
    newUserMap.save().then(usermap => res.json(usermap));
});

// router.patch("/:id", (req, res) => {
//     UserMap.findById(req.params.id)
//     // .then()
//     // $set
// });


module.exports = router;