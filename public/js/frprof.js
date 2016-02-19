
var friends;
$(document).ready(function() { 

	console.log('frprof js testing...');

	$.get('/getFriends', function(data) { 
		console.log(data);
		friends = data;
	});

	//console.log(friend2[1]);
	var f = localStorage.getItem('friend');
	console.log(friends.friends[1]);
	$('#profName').text(f);




})

