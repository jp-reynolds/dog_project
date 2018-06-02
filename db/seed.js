var db = require("../models");

var placeSeedList = [
	{
		name: "Golden Gate Canyon State Park",
		city: "Golden, CO",
		description: "Just outside of the City of Denver and a great secluded hiking spot.",
		elevation: "8,694 ft.",
		image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/2_GoldenGatePark3_YannRopars_0.jpg?itok=B1UPuwxU",
		lat: 39.814339,
		long: -105.395622,
		comments: [
			{
				body: "This place was perfect! Very peaceful and a great place to bring the pup!"
			},
		],
		type: "hike"
	},
	{
		name: "Natural Hot Springs",
		city: "Kremmling, CO",
		description: "Just outside of the City of Denver and a great secluded hiking spot.",
		elevation: "7,675 ft.",
		image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/2_GoldenGatePark3_YannRopars_0.jpg?itok=B1UPuwxU",
		lat: 40.079063,
		long: -106.103241,
		comments: [
			{
				body: "This place was perfect! Very peaceful and a great place to bring the pup!"
			},
		],
		type: "camp"
	},
	{
		name: "Cheesman Park",
		city: "Denver, CO",
		description: "Just outside of the City of Denver and a great secluded hiking spot.",
		elevation: "8,694 ft.",
		image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/2_GoldenGatePark3_YannRopars_0.jpg?itok=B1UPuwxU",
		lat: 39.7335,
		long: 104.9652,
		comments: [
			{
				body: "This place was perfect! Very peaceful and a great place to bring the pup!"
			},
		],		
		type: "park"
	}
];

db.Place.remove({}, function(err, deleteResults){
		db.Place.create(placeSeedList, function(err, places){
			console.log("running seed file");
			console.log(places);
		});
});