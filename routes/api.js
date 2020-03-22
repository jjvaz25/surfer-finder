//All routes for API
 const express = require('express');
 const router = express.Router();
 const Surfer = require('../models/surfer');

 //get a list of surfers from db
router.get('/surfers', (req, res, next) => {
  Surfer.aggregate().near({
    near: {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 100000,
    spherical: true,
    distanceField: 'dis'
  }).then((surfers) => {
    res.send(surfers);
  });
});

//create a new surfer and add to db
router.post('/surfers', (req, res, next) => {
  let surfer = new Surfer(req.body);
  surfer.save().then((surfer) => {
    res.send(surfer);
  }).catch(next);
});

//update surfer and save in db
router.put('/surfers/:id', (req, res, next) => {
  Surfer.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((surfer) => {
    res.send(surfer);
  });
});

//delete surfer and remove from db
router.delete('/surfers/:id', (req, res, next) => {
  Surfer.findByIdAndDelete(req.params.id).then((surfer) => {
    res.send(surfer);
  });
});

module.exports = router;