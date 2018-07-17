const express  = require ('express');
const mongoose = require ('mongoose'),
	  Schema   = mongoose.Schema;
var   Comment  = require('./comment');

const PlaceSchema = new Schema ({
	name: String,
	city: String,
	description: String,
	elevation: String,
	image: String,
	long: Number,
	lat: Number,
	type: String,
	likes: Number,
	dislikes: Number,
	comments: [Comment.schema]
});

var Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;