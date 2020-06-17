var db = require('../models');


module.exports = (app) => {

    // open the home page for the user to sign in
    app.get('/', (req,res) => {
        db.Password.find({}).then(data =>{
            console.log(data)
            const passwords = {
                password: data
            };
            res.render('index', passwords);
        }) 
       
    });
};