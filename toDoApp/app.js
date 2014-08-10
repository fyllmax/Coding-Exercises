/* global $ */
"use strict";

$(document).ready(function() {

  $( "#add-task-form" ).on( "submit", function( event ) {
    var formData = $(this).serializeArray();
    var task = {};

    $.each(formData, function(key, element) {
      task[element.name] = element.value;
    });

    event.preventDefault();

    $("#add-task").modal("hide");

    localStorage.setItem(task.title, JSON.stringify(task));

  });

});
