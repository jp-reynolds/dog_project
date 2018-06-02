var express = require('express');
var router = express.Router();
var placeController = require('../controller/places');

//GET ROUTES
router.get('/api/places/park', placeController.placeIndex);
router.get('/api/places/hike', placeController.placeIndex);
router.get('/api/places/camp', placeController.placeIndex);

//GET BY ID ROUTE
router.get('/api/places/:place_id', placeController.placeIndexID);

//CREATE ROUTE
router.post('/api/places', placeController.placeCreate);

//UPDATE ROUTE
router.put("/api/places", placeController.placeUpdate);

//DELETE ROUTE

module.exports = router;