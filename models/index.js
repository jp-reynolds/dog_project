var mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
	console.log("process.env is " + process.env.NODE_ENV);
	mongoose.connect(process.env.MLAB_URL);
	console.log("executing MLAB... " + process.env.MLAB_URL);
} else {
	mongoose.connect("mongodb://localhost/Dog");
	console.log("executing localhost... ");
}

module.exports.Place = require("./place.js");
module.exports.Comment = require("./comment.js");