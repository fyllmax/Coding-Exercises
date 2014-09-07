/*global $: true, alert: true */

"use strict";

$(document).ready(function(){

  var randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

  };

  var randNum = $("#rand-num");
  var currentNum = $("#ent-num");

  randNum.text(randomInt(100, 1000000000));

  $(".btn-lg").on("click", function() {

    var entNum = currentNum.text();
    var newNum = entNum + $(this).text();

    currentNum.text(newNum);

    (function iDidIt() {

          if (currentNum.text() === randNum.text()) {

            alert("you did it right!!!");
            alert("lets play again!")
            randNum.text(randomInt(100, 1000000000));
            currentNum.empty();
          }

        }());

  });

  $(".btn-warning").on("click", function() {

    var entNum = currentNum.text();
    var removedNum = entNum.substring(0, entNum.length - 18);

    currentNum.text(removedNum);

  });


});
