
var fData;
$(document).ready(function() { 

	console.log('frprof js testing...');

	$.get('/viewFriend', function(data) { 
		fData = data;
		var f = localStorage.getItem('friend');
		console.log(fData);
		$('#profName').text(f);
	});
	//console.log(friend2[1]);

})

