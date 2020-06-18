// Bring in db for use
const db = require('../models');
const mongojs = require('mongojs');
const mongoose = require('mongoose');

module.exports = (app) => {
    app.post('/update/', (req, res) => {
        console.log(req.body);

  db.Password.insert(req.body, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.send(data);
    }
    });
 });
};