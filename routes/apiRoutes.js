// Bring in db for use
const db = require('../models');
const mongojs = require('mongojs');
const mongoose = require('mongoose');

module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        db.create({
            password: req.body
        })
        .then(dbPass => {
          res.json(dbPass);
        })
        .catch(err => {
          res.json(err);
        })
    })
}