const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/passworddb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let passwordSeed = [
    {
        password: "qwerfghy2354?!"
    },
    {
        password: "lemoncakes"
    }, 
    {
        password: "10110101100110101110010100"
    }
];

// Logic to run seeder 
db.Password.deleteMany({})
  .then(() => db.Password.collection.insertMany(passwordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });