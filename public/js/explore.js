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
      $.get('/addExplore', function(data) {
          dishes = data;
      });
      console.log("next-i: " + i);
      //check if it exeeds number of dishes
      if (i < dlength -1) {
        i = i+1;
        console.log(i);
        curr = dishes.dishes[i];

        console.log(curr);
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);
        console.log("if-i: " + i);

      }
      else {
        i = 0;
        console.log("else-i: " + i);
        curr = dishes.dishes[i];
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);

        //alert("no more dishes! go back!");
      }

    });

    $('#prev').click(function() {
      $.get('/addExplore', function(data) {
          dishes = data;
      });
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
        i = dlength-1;
        curr = dishes.dishes[i];
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);
        console.log("prev-else-i: " + i);
        //alert('go forward!');
      }

    });

    $('#dish_img').click(function() {
            localStorage.setItem('rate', i);
            console.log("ajax testing...");

        });

    //push new dish into your bookmarks
    $('#book_button').click(function() {
      /*send google analytics on bookmark like
      var click = false; 
      if (click == false) {
          ga("send", "event", "bookmark", "click");
          click = true;
      }     
      */

      //alert that dish was bookmarked
      alert(curr.dishName + " bookmarked!");
      var newBMK = {
        'dishName' : curr.dishName,
        'restaurantName' : curr.restaurantName,
        'imgURL' : curr.imgURL,
        'address' : 'SD, CA', 
        'ID': i
      }
      console.log("BMK testing...");
      console.log('rugt place!');
      console.log(newBMK);

      //store bookmarks in bookmark
      $.get(
        "/addBookmark",
        {
          'dishName' : curr.dishName,
          'restaurantName' : curr.restaurantName,
          'imgURL' : curr.imgURL,
          'address' : curr.address,
          'ID': i

        }
      );
    });

  //push new dish into your bookmarks from item page
  $('#book_btn').click(function() {
    //alert that dish was bookmarked
    /*send google analytics on bookmark like
      var click = false; 
      if (click == false) {
          ga("send", "event", "bookmark", "click");
          click = true;
      }     
      */
    alert(curr.dishName + " bookmarked!");
    var newBMK = {
      'dishName' : curr.dishName,
      'restaurantName' : curr.restaurantName,
      'imgURL' : curr.imgURL,
      'address' : 'SD, CA'
    }
    console.log("BMK testing...");
    console.log('rugt place!');
    console.log(newBMK);

    //store bookmarks in bookmark
    $.get(
      "/addBookmark",
      {
        'dishName' : curr.dishName,
        'restaurantName' : curr.restaurantName,
        'imgURL' : curr.imgURL,
        'address' : curr.address
      }
    );
  })

  $('#submitBtn').click(function() {
    alert("Rating Sent!");
  });

  });

