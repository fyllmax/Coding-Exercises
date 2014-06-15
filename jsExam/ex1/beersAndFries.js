"use strict";

function sortFunction(x,y){
  return x.score - y.score;
}

function beerAndFries(arr){
  var beer = arr.filter(function(x){
      return x.type === "beer";
    }).sort(sortFunction),
    fries = arr.filter(function(x){
      return x.type === "fries";
    }).sort(sortFunction),
    result = 0;

  beer.forEach(function(_,i){
    result += beer[i].score * fries[i].score;
  });

  return result;
}

exports.beerAndFries = beerAndFries;
