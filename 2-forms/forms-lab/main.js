console.log('Main.js is connected!')

$(function() {


  var $userData = $('#user_data');

  $userData.submit(function(event) {

    event.preventDefault();

    // uncomment this when you're working on it!
    /*
    var username = [access the user's username]
    var email = [email]
    var bio = [bio]
    var number = [number]
    var pet = [pet]
    */

    var username = event.target.user_username.value;
    var email = event.target.user_email.value;
    var bio = event.target.user_bio.value;
    var number = event.target.user_favorite_number.value;
    var pet = event.target.user_pet.value;

    // this is going to have an error until you do the part above



    attachUserInfoToPage(username, email, bio, number, pet);
    event.target.reset();
  })

  function attachUserInfoToPage(username, email, bio, number, pet) {
    // use jquery to append the information to the dom!
    // Create a new div with the user info 

    $('<div>').attr('id', 'userdeets').css('text-align', 'center').appendTo('#users_info');
    $('<h2>').appendTo('#userdeets').html('Username');
    $('<p>').appendTo('#userdeets').html(username);
    $('<h2>').appendTo('#userdeets').html('Email Address');
    $('<p>').appendTo('#userdeets').html(email);
    $('<h2>').appendTo('#userdeets').html('Bio');
    $('<p>').appendTo('#userdeets').html(bio);
    $('<h2>').appendTo('#userdeets').html('Fave Number');
    $('<p>').appendTo('#userdeets').html(number);
    $('<h2>').appendTo('#userdeets').html('Fave Pet');
    $('<p>').appendTo('#userdeets').html(pet);


  }



})