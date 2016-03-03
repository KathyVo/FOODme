var books;

$(document).ready(function() { 
	console.log('bookmarks js connected!'); 

	$.get('/getBooks', function(data) {
        books = data.bookmarks;
        console.log(books);
	});

	$('.bmk_dishes').click(function() { 
		console.log('clicked ' + $(this).attr('id'));
		var id = parseInt($(this).attr('id'));
		//check it parsed correctly by math equation 
		console.log(id + id);
		localStorage.setItem('rate', id);
		window.location.href = "/item";
	})

}) //end of document.ready