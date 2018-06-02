const express  = require ('express');
const mongoose = require ('mongoose'),
	  Schema   = mongoose.Schema;

const CommentSchema = new Schema ({
	body: String
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;