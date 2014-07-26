
"use strict";

$(document).ready(function () {

  var interval = 1000;
  var time;
  var index;
  var count;

  function getTime () {

    var minutes = $("#minutes").val(),
        seconds = $("#seconds").val();

    var totalTime = {
      allMinutes : Number(minutes) + parseInt(seconds / 60),
      allSeconds : Number(seconds) % 60,
      inSeconds : Number(minutes * 60) + Number(seconds)
    };

    return totalTime;
  }

  function count_up() {
    index ++;
    // console.log(index);
    $("#second-digit").text(index)
    if (index === time.inSeconds) {
      clearInterval(count);
      alert("Game Over");
    }
  }

  function count_down() {
    index --;
    // console.log(index);
    var mins = parseInt(index / 60);
    $("#minute-digit").text(mins)
    $("#second-digit").text(index%60)
    if (index === 0) {
      clearInterval(count);
    alert("Game Over");
    }
  }

  $("#count-up").on("click", function () {
    index = 0;
    time = getTime();
    count = setInterval(count_up, interval);
  });

  $("#count-down").on("click", function () {
    time = getTime();
    index = time.inSeconds;
    count = setInterval(count_down, interval);
  });

  // $(".btn-danger").on("click", function () {

  // });



});
