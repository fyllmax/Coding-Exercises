/* global $:true, alert: true */

"use strict";

$(document).ready(function () {

  var interval = 1000;
  var time;
  var index;
  var count;
  var counting;
  var mins;
  var sec;

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
    sec = index;
    mins = Math.floor(index / 60);

    if (sec < 10) {sec = "0" + sec;}
    else if (sec <= 59) {sec = sec;}
    else {sec = index - (mins * 60);}

    if (mins < 10) {mins = "0" + mins;}

    $("#second-digit").text(sec);
    $("#minute-digit").text(mins);

    if (index === time.inSeconds) {
      clearInterval(count);
      alert("Game Over");
    }
  }

  function countDown() {
    counting = true;
    index --;
    var mins = parseInt(index / 60);
    $("#minute-digit").text(mins);
    if (index >= 10) {
      $("#second-digit").text(index % 60);
    }
    else {
      $("#second-digit").text("0" + index % 60);
    }
    if (index === 0) {
      clearInterval(count);
    alert("Game Over");
    }
  }

  function clear () {

    clearInterval(count);
    $("#minutes").val("");
    $("#seconds").val("");
    $("#minute-digit").text("00");
    $("#second-digit").text("00");
    counting = false;
  }

  $("#count-up").on("click", function () {
    index = 0;
    time = getTime();
    if (!counting) {
      count = setInterval(countUp, interval);
    }
    else {clear();}

  });

  $("#count-down").on("click", function () {
    time = getTime();
    index = time.inSeconds;
    if (!counting) {
      count = setInterval(countDown, interval);
    }
    else {clear();}
  });

  $(".btn-danger").on("click", function () {
    clear();
  });

});
