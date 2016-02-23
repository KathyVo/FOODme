var data = require('../public/json/friends.json');
var dish = require('../public/json/explore.json');

exports.view = function(req, res) {
	console.log("Friends page testing...")
	res.render('friends', data);
	console.log(dish);

}

exports.viewFriend = function(req, res) {
	console.log("Friends page testing...");
	console.log('SUCCESS VIEW FIRNED!');
	console.log(dish);
		res.render('frprof', data);

}

exports.getFriends = function(req, res) { 
	console.log(data);
	res.json(data);
}

exports.getDishes = function(req, res) { 
	console.log(dish);
	res.json(dish);
}