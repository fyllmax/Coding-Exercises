/*global $: true, console: true */

"use strict";

$(document).ready(function() {

  var allStudents;
  var leftList = $("#left-list");


  $.getJSON("http://localhost:3000/students", function(students) {

    allStudents = students;
    var populateList = createOptions(allStudents);

    leftList.append(populateList);

    return allStudents;
  });


  var createOptions = function(arr) {

    var option = [];

    arr.forEach(function(item) {
      option.push("<option>" + item.name + "</option>");
    });

    return option.join("");
  };


  $("#to-right").on("click", function() {

    var toMove = $("#left-list option:selected");

    // console.log(toMove);

    toMove.detach();
    $("#right-list").append(toMove);
    $("option:selected").removeAttr("selected");

  });


  $("#to-left").on("click", function() {

    var toMove = $("#right-list option:selected");

    toMove.detach();
    $("#left-list").append(toMove);
    $("option:selected").removeAttr("selected");

    });

});
