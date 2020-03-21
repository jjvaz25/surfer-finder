//All routes for API
 const express = require('express');
 const router = express.Router();

 //get a list of surfers from db
router.get('/surfers', (req, res) => {
  res.send({type: 'GET'});
});

//create a new surfer and add to db
router.post('/surfers', (req, res) => {
  console.log(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    level: req.body.level
  });
});

//update surfer and save in db
router.put('/surfers/:id', (req, res) => {
  res.send({type: 'PUT'});
});

//delete surfer and remove from db
router.delete('/surfers/:id', (req, res) => {
  res.send({type: 'DELETE'});
});

module.exports = router;