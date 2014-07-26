
"use strict";

$(document).ready(function () {

  var interval = 1000;
  var time;
  var index;
  var count;
  var counting;

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

  function countUp() {
    counting = true;
    index ++;
    // console.log(index);
    $("#second-digit").text(index)
    if (index === time.inSeconds) {
      clearInterval(count);
      alert("Game Over");
    }
  }

  function countDown() {
    counting = true;
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

  function clear () {

    clearInterval(count)
    $("#minutes").val("")
    $("#seconds").val("");
    $("#minute-digit").text("00")
    $("#second-digit").text("00")
    counting = false;
  }

  $("#count-up").on("click", function () {
    index = 0;
    time = getTime();
    if (!counting) {
      count = setInterval(countUp, interval);
    }
    else {clear()}

  });

  $("#count-down").on("click", function () {
    time = getTime();
    index = time.inSeconds;
    if (!counting) {
      count = setInterval(countDown, interval);
    }
    else {clear()}
  });

  $(".btn-danger").on("click", function () {
    clear()
  });



});
