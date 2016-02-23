var friends; //store json data
var fDishes;
var top;
var prof = 0;
var getF;

$(document).ready(function() { 

	console.log('friends js connected!');
	var i = localStorage.getItem('friend');
	console.log(i);

	$.get('/getFriends', function(data) { 
		friends = data.friends;
		top = data.tops;
		//console.log(top[1]); //check that it receives it 
		console.log(friends.length);
		//set retrieval if/else statement
		getF = localStorage.getItem('get');
		//check whether to open friend or top person
		getFriend();

	})
	$.get('/getDishes', function(data) { 
		fDishes = data; 
		console.log(fDishes);
		fd1 = fDishes.dishes[0].imgURL;
		fd2 = fDishes.dishes[1].imgURL;
		fd3 = fDishes.dishes[2].imgURL;
		$('#0').attr('src', fd1);
		$('#1').attr('src', fd2);
		$('#2').attr('src', fd3);

	})

	$('.friend').click(function() { 
		var name = $(this).attr('id');
		console.log(name);
		localStorage.setItem('friend', name);
		localStorage.setItem('get', true);
		window.location.href = '/frprof';

	})

	//when you click on friend's top dishes, it should take you to the item review page
	$('#myDishes img').click(function() { 
		localStorage.setItem('rate', event.target.id);
		window.location.href = '/item';
	})
	
			//getFriend();
})

//display friend profile
function getFriend() { 
	var f = localStorage.getItem('friend');
	console.log(friends[1]);
	var id = 0;
	//finding name object 
	for (var i = 0; i < friends.length; i++) { 
		if (friends[i].name == f) { 
			id = i;
			console.log(prof + " " + f);
		}	
	} //end of for loop
	var person = friends[id];
	console.log(person); //confirm it gets correct person
	$('#profName').text(person.name);
	$('#title').text(person.title);
	$('#pIcon').attr('src', person.img);
}


