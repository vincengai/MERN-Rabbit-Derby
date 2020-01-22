const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Highscore = require('../../models/highscore');

router.get('/', (req, res) => {
    Highscore.find()
        .sort({ date: -1 })
        .then(highscores => res.json(highscores))
        .catch(err => res.status(404).json({ nohighscoresfound: 'No highscores found' }));
});

router.get('/user/:user_id', (req, res) => {
    Highscore.find({user: req.params.user_id})
        .sort({ score: -1 })
        .then(highscores => res.json(highscores))
        .catch(err =>
            res.status(404).json({ nohighscoresfound: 'No highscores found from this user'}
            )
        )
});

router.get('/:id', (req, res) => {
    Highscore.findById(req.params.id)
        .then(highscore => res.json(highscore))
        .catch(err => 
            res.status(404).json({ nohighscorefound: 'No highscore found with that ID'}
            )    
        );
});

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newHighscore = new Highscore({
            user: req.user.id,
            username: req.body.username,
            score: req.body.score
        });

        newHighscore.save().then(highscore=> res.json(highscore));
    }
);

module.exports = router;