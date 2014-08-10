"use strict";

$(document).ready(function(){

  $(function ($) {

      var allPanels = $(".accordion > dd").hide();

      $(".accordion > dt > a").click(function () {
          var $target = $(this).parent().next().slideToggle();
          allPanels.not($target).slideUp();
          return false;
      });
  });

});
