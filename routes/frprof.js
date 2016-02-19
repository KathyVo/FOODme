
var data = require('../public/json/friends.json');
var dish = require('../public/json/explore.json');
exports.view = function(req, res){
	
	console.log(data);
	console.log('friend profile testing...');
	res.render('frprof', data);
	console.log(dish);
	res.json(dish);
	
};