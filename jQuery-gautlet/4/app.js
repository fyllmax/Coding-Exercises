/* global $: true, console: true; */
"use strict";

$(document).ready(function() {

  var
    courseSelect = $("#courses"),
    studentSelect = $("#students"),
    infoSelect = $("#student-info");

  var
    data,
    groupedByCourse;

  $.getJSON("http://localhost:3000/students", function(students) {

    data = students;
    groupedByCourse = groupBy(data,"course");

    changeCourse();

    $("#courses").on("change", function() {
      changeCourse();
    });


    $("#students").on("change", function() {
      changeStudent();
    });

  });

  var changeCourse = function() {

    studentSelect.empty();

    var toAppendStudentList = showNames(groupedByCourse, courseSelect.val());

    studentSelect.append(toAppendStudentList);

    changeStudent();

  };

  var changeStudent = function() {

    var toAppendStudenAcc =  showAcc(groupedByCourse, courseSelect.val(), studentSelect.val());

    infoSelect.text(toAppendStudenAcc);

  };

  var groupBy = function(arr, objKey) {

    var grouped = {};

    arr.forEach(function(obj) {

      var key = obj[objKey];

      if (grouped[key]) {
        grouped[key].push(obj);
      }

      else {
        grouped[key] = [obj];
      }

    });

    return grouped;

  };


  var showNames = function(obj, course) {
    var option = [];
    // option.push("<option>Choose student</option>");
    obj[course].forEach(function(item) {

      var template = "<option>"+ item.name +"</option>";
      option.push(template);

    });

    // return option;
    return option.join("");

  };

  var showAcc = function(obj, course, ime){

    var template;

    obj[course].forEach(function(item) {

      if (ime === item.name) {
        template = "GitHub for " + item.name + " is " + item.github;
      }

    });

    return template;

  };

});
