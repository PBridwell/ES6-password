const db = require('../models');


module.exports = (app) => {

    // gets the homepage and renders saved passwords 
    app.get('/', (req,res) => {
        db.Password.find({}).then(data =>{
        const passwords = []
        // Pushes items from response to empty passwords array
        data.forEach(item => passwords.push(item.password))
        res.render('index', {passwords});
        }) 
       
    });
};