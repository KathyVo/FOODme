var friends; //store json data
var top;
var prof = 0;
var getF;

$(document).ready(function() { 

	console.log('friends js connected!');
	var i = localStorage.getItem('friend');
	console.log(i);

	$.get('/getFriends', function(data) { 
		friends = data.friends;
		top = data;
		console.log(top[1]); //check that it receives it 
		console.log(friends.length);
		//set retrieval if/else statement
		getF = localStorage.getItem('get');
		//check whether to open friend or top person
		getFriend();
		getTop();
	})


	$('.friend').click(function() { 
		var name = $(this).attr('id');
		console.log(name);
		localStorage.setItem('friend', name);
		localStorage.setItem('get', true);
		window.location.href = '/frprof';

	})

	$('.top').click(function() { 
		var name = $(this).attr('id');
		console.log(name);
		localStorage.setItem('top', name);
		localStorage.setItem('get', false);
		window.location.href = '/frprof';

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

function getTop() { 
	var t = localStorage.getItem('top'); 
	var id = 0; 
	console.log(top[1]);
	for (var i = 0; i < top.length; i++) { 
		if(top[i].name == t) { 
			id = i; 
			console.log(prof + " " + t);
		}
	}
	var person = top[id];
	console.log(person); 
	//$('#profName').text(person.name);
	$('#title').text(person.title);
	$('#pIcon').attr('src', person.img);
}

