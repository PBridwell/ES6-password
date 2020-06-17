const db = require('../models');
const mongoose = require('mongoose');
const express = require('express');


module.exports = (app) => {

    // open the home page for the user to sign in
    app.get('/', (req,res) => {
        db.Password.find({}).then(data =>{
            
            const passwords = {
                password: data.password

            };
            console.log(data)
            res.render('index', passwords);
        }) 
       
    });
};