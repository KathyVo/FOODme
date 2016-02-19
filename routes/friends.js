var data = require('../public/json/friends.json');
var dish = require('../public/json/explore.json');

exports.view = function(req, res) {
	console.log("Friends page testing...");
	res.render('friends', data);
	console.log(dish);
	console.log('dish oading...');

}

exports.getFriends = function (req, res) {
	console.log('get Friends testing...');
	res.json(data);
	console.log(dish);	
	res.json(dish);
	console.log('dish oading...');
	res.render('frprof', data);

};