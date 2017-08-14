$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var color = $('input#color').val();
    var food = $('input#food').val();
    var animal = $('input#animal').val();
    var curse = $('input#curse').val();
    var band = $('input#band').val();
    var movie = $('input#movie').val();
    var list = [color, food, animal, curse, band, movie];
    var zero = list.splice(0, 3);
    var newArray = zero;
    $("#result").text(newArray);
    $("#array").show();

    event.preventDefault();
  });
});
