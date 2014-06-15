"use strict";

function sortArray(x, y) {
  return x.score - y.score;
}

function beerAndFries(arr) {

  var beers = arr.filter(function(b) {
      return b.type === "beer";}).sort(sortArray);

  var fries = arr.filter(function(f) {
      return f.type === "fries";}).sort(sortArray);

  var result = 0;

  beers.forEach(function(_, i) {
    result += beers[i].score * fries[i].score;
  });

  return result;
}

exports.beerAndFries = beerAndFries;
