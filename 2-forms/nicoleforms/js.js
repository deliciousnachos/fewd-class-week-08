$(function() {






var $myForm = $('#my-form');


$myForm.submit(function(event) {
  event.preventDefault(); // toggle on and off to see what happens
  var firstname = event.target.firstname.value;
  var lastname = event.target.lastname.value;
  console.log(firstname, lastname);
  event.target.reset(); // toggle on and off to see what happens

})













}) //docready