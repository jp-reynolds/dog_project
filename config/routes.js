var express = require('express');
var router = express.Router();
var placesController = require('../controller/places');

//GET ROUTES
router.get('/api/places', placesController.placesIndex);
router.get('/api/places/park', placesController.placesParkIndex);
router.get('/api/places/hike', placesController.placesHikeIndex);
router.get('/api/places/camp', placesController.placesCampIndex);

//GET BY ID ROUTE
// router.get('/api/places/:place_id', placesController.placeIndexID);

//CREATE ROUTE
// router.post('/api/places', placesController.placeCreate);

//UPDATE ROUTE
// router.put("/api/places", placesController.placeUpdate);

//DELETE ROUTE

module.exports = router;