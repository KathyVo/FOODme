var data = require('../public/json/friends.json');
var dish = require('../public/json/explore.json');

exports.view = function(req, res) {
	console.log("Friends page testing...")
	res.render('friends', data);
	console.log(dish);

}

exports.viewFriend = function(req, res) {
	console.log("Friends page testing...")
	res.render('frprof', data);
	console.log('SUCCESS VIEW FIRNED!');

}

exports.getDishes = function(req, res) { 
	console.log("dish rendering...");
	res.json(dish);
}

exports.getFriends = function (req, res) {
	res.json(data);	
	res.json(dish);
	console.log(data.friends[0]);


};