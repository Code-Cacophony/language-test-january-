$(document).ready(function () {
  $("form#user-info").submit(function (event) {
    event.preventDefault();

    var song = parseInt($("#favorite-song").val())

    if (song === 2) {
      $("#ruby").show();
    } else if (song === 3) {
      $("#python").show();
    } else {
      $("#golang").show();
    }


  });
});