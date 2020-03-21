const express = require('express');
const routes = require('./routes/api');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//initialize routes middleware
app.use('/api', routes);


app.listen(process.env.port || 4000, () => {
  console.log('Now listening for requests');
})