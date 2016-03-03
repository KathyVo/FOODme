var dishes = [];
var bookmarks = [];
    //for current dish
var curr;
var i = 0; //tracker number

$(document).ready(function() { 
	console.log('upload.js connected!');

	$.getJSON('../json/explore.json', function(data) {
        dishes = data;
        console.log("getJSON activated!");
         //loading slideshow
        curr = dishes.dishes[i];
        console.log(curr);
        var name = curr.name;
        console.log("name variable testing..." + name);
        var im = "../" + curr.imgURL;
        console.log("Image is..." + im);
        $('#dish_img').attr('src', im);
        
  
});

	$('#snap').click(function() { 
		$('#exDish').css('visibility', 'visible');
		return false;
	})

	$('#upBtn').click(function() { 
		console.log('Submit Clicked!');
		var tags = $('#tags').val();
		var ups = new Array(); 
		ups = tags.split(',');
		alert(ups[0] + "and " + ups[1] + "and " + ups[2]);
		
		$.post('/addExplore', { 
				'dishName': $('#name').val(),
				'restaurantName': $('#restaurant').val(),
				'address': $('#address').val(),
				'imgURL': 'http://lackeyafjrotc.com/wp-content/uploads/2016/01/cute-broccoli-broccoli.jpg',
				'ul': ups[0], 
				'u2': ups[1], 
				'u3': ups[2], 
		
		}, function (res) {});

	})
})