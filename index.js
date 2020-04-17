const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const PORT = 4000;

//set up mongoose connection
// const mongoDB = process.env.DB_URL;
const mongoDB = 'mongodb+srv://jjvaz25:mongodbpwd@cluster0-m85lc.mongodb.net/surfer-finder?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

//initialize routes middleware
app.use('/api', routes);

//handle errors
app.use((err, req, res, next) => {
  // console.log(err.message);
  res.status(422).send({ error: err.errors.name.message });
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Now listening for requests on ${PORT}`);
});