var data = require("../public/json/explore.json");

exports.view = function(req, res){

	res.render('uploadDish', data);
	};

exports.addExplore = function(req, res) {

	var addDish = {
			'id': '6',
			'dishName': req.body.dishName,
			'restaurantName': req.body.restaurantName,
			'address': req.body.address,
			'imgURL': req.body.imgURL,
			'dis': '0',
			'meh': '0',
			'yay': '0',
			'ul': req.body.u1,
			'u2': req.body.u2,
			'u3': req.body.u3,
			'd1': req.body.d1,
			'd2': req.body.d2,
			'd3': req.body.d3
		};

	data.dishes.push(addDish);

	var i;
	for(i = 0; i < 6; i++) {
		data.dishes[i+1] = data.dish[i];
	}
	data.dishes[0] = addDish;



	console.log(addDish);
	//data['dishes'].push(addDish);
	console.log(data);
	// res.render('explore', data);
};

exports.getExplore = function (req, res) {
	res.json(data);
};
