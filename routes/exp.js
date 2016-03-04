var data = require('../public/json/bookmarks.json');

exports.view = function(req, res) {
	console.log("Explore page testing...")
	res.render('explore', data);

}

exports.addBkmk = function(req, res) { 
	// Your code goes here
	res.render('bookmarks');
	var newBookmark = {
		'restaurantName': req.query.restaurantName,
		'dishName': req.query.dishName,
		'address': req.query.address,
		'imageURL': req.query.imgURL,
		'id': req.query.ID

	}
	console.log(newBookmark);
	data["bookmarks"].push(newBookmark);
}

exports.getBookmarks = function(req, res) { 
	res.json(data);
}