
var data = require('../public/json/friends.json');
exports.view = function(req, res){
	
	console.log(data);
	console.log('friend profile testing...');
	res.render('frprof', data);
	
};