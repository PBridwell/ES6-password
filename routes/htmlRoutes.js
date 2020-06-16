// var db = require('../models');


module.exports = (app) => {

    // open the home page for the user to sign in
    app.get('/', (req,res) => {
        res.render('index')
    });
};