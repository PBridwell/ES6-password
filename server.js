// Bringing in dependencies
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")

const PORT = process.env.PORT || 8080;

const app = express();
// Handle data-parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//==================================================================
// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passworddb", { useNewUrlParser: true });
// Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// routes
// app.use(require("./routes/api.js"));
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});