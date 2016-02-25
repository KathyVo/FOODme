//var data = require('explore.json');

//get dishes json data
    var dishes;
    var bookmarks;
    //for current dish
    var curr;
    var i = 0; //tracker number
    var face = false;
    var ups = false;
    var downs = false;
    var complete = false;
    var dlength = 0;

$(document).ready(function() {

    //get JSON data with first
    console.log("BEFORE EXPLORE!");

    //get json array data
    $.get('/addExplore', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        console.log(dishes);
         //loading slideshow
        curr = dishes.dishes[i];
        console.log(curr);
        var name = curr.dishName;
        console.log("name variable testing..." + name);
        var im = curr.imgURL;
        console.log("Image is..." + im);
        $('#dish_img').attr('src', im);
        dlength = dishes.dishes.length;
        console.log(dlength); 
}); 

    //move to next dish image
    $('#next').click(function() {

      //check if it exeeds number of dishes
      if (i < dlength -1) {
        i = i+1;
        console.log(i);
        curr = dishes.dishes[i];

        console.log(curr);
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);

      }
      else { 
        alert("no more dishes! go back!");
      }
      
    });

    $('#prev').click(function() {
      if (i > 0) { 
        i = i-1;
        console.log(i);
        curr = dishes.dishes[i];

        console.log(curr);
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);
        console.log(dishes.length);
      }
      else { 
        alert('go forward!');
      }
      
    });

    $('#dish_img').click(function() {
            localStorage.setItem('rate', i); 
            console.log("ajax testing...");
            
        });

    //push new dish into your bookmarks
    $('#book_button').click(function() {
      console.log(bookmarks);
      alert(curr.dishName + " bookmarked!");
      var newBMK = {
        'dishName' : curr.dishName,
        'restaurantName' : curr.restaurantName,
        'imgURL' : curr.imgURL,
        'address' : 'SD, CA'
      }
      console.log("BMK push testing...")
      console.log(newBMK);

      bookmarks.bookmarks.push(newBMK);
      console.log(bookmarks);

      $.get(
        "/addBookmark",
        {
          'dishName' : curr.dishName,
          'restaurantName' : curr.restaurantName,
          'imgURL' : curr.imgURL,
          'address' : 'SD, CA'
        }
      );
    })

  });

