let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/passworddb", {
  useNewUrlParser: true,
  useFindAndModify: false
});