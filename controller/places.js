var db = require('../models');
var Place = db.place;
var Comment = db.comment;


//GET PLACES
function placesIndex(req, res) {
	db.Place.find({}, function(err, places) {
		if (err) res.send(err);
		else res.json(places);
	});
}

function placesParkIndex(req, res) {
	db.Place.find({type: 'park'}, function (err, placesPark) {
		if (err) res.send(err);
		else res.json(placesPark);
	});
}

function placesHikeIndex(req, res) {
	db.Place.find({type: 'hike'}, function (err, placesHike) {
		if (err) res.send(err);
		else res.json(placesHike);
	});

}

function placesCampIndex(req, res) {
	db.Place.find({type: 'camp'}, function (err, placesCamp) {
		if (err) res.send(err);
		else res.json(placesCamp);
	});

}

//CREATE PLACES
function placesCreate(req, res) {
	console.log(req.body);
	let newPlace = {
		name: req.body.name,
		city: req.body.city,
		description: req.body.description,
		elevation: req.body.elevation,
		image: req.body.image,
		lat: req.body.lat,
		long: req.body.long,
		comments: req.body.comments,
		type: req.body.type
	};
	db.Place.create(newPlace, function(err, newPlace) {
		if (err) res.send(err);
		else res.json(newPlace);
	});
}

//UPDATE PLACES
function placesUpdate(req, res) {

}

//DELETE PLACES
function placesDestroy(req, res) {

}

module.exports.placesIndex = placesIndex;
module.exports.placesParkIndex = placesParkIndex;
module.exports.placesHikeIndex = placesHikeIndex;
module.exports.placesCampIndex = placesCampIndex;

module.exports.placesCreate = placesCreate;

module.exports.placesUpdate = placesUpdate;

module.exports.placesDestroy = placesDestroy;



