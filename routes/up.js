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

	//data.dishes.push(addDish);

	var i;
	for(i = 6; i > 0; i--) {
		data.dishes[i] = data.dishes[i-1];
		console.log("i: " + i);
	}
/*
	data.dishes[6] = data.dishes[5];
	data.dishes[5] = data.dishes[4];
	data.dishes[4] = data.dishes[3];
	data.dishes[3] = data.dishes[2];
	data.dishes[2] = data.dishes[1];
	data.dishes[1] = data.dishes[0];*/
	//data.dishes[1] = data.dishes[0];
	data.dishes[0] = addDish;

	console.log("addDish: " + addDish);
	//data['dishes'].push(addDish);
	console.log("data: " + data);
	// res.render('explore', data);
};

exports.getExplore = function (req, res) {
	res.json(data);
};
