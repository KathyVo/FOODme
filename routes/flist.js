var data = require('../public/json/friends.json');

exports.view = function(req, res) {
	console.log("Friends page testing...")
	res.render('friends', data);
	console.log(data);

}

exports.viewFriend = function(req, res) {
	console.log("Friends page testing...")
	res.render('frprof', data);
	console.log(data);
	console.log('SUCCESS VIEW FIRNED!');

}

exports.getFriends = function (req, res) {
	res.json(data);	
	console.log(data.friends[0]);


};