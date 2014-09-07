$(document).ready(function() {

  $("#search-button").click(function() {

      var img_src = $("#search-input").val();
      var $img = $("<img>").attr({src: img_src, width: "100px", height: "100px"});

      $img.load(function() {

        $("#gallery").append($img);
        // $("#gallery").append("<br/>");
        $img.click(function (){
          $img.remove();
        });
      });
  });

});
