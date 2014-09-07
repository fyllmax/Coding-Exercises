// console.log("Empty I am.");


var highlight_class = "highlight";
var allParagraphs = [];

$("p").each(function (index, elem) {
  allParagraphs.push($(elem).attr("class"));
});

$(document).ready(function() {

  $("#toggle-button").click(function () {


    console.log(allParagraphs);

    $("." + highlight_class).removeClass("highlight");

    var toHighlight = allParagraphs.shift();

    $("." + toHighlight).addClass("highlight");

    allParagraphs.push(toHighlight);
  });
});
