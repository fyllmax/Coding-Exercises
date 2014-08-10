"use strict";

var print = function(text) {
  console.log(text);
};

// ****************************************************************************

var nth_fibonacci = function(n) {
    // implementation here
  if (n < 2) {

    return n; }

  return nth_fibonacci(n - 2) + nth_fibonacci(n - 1);
};

print(nth_fibonacci(10));

// ****************************************************************************

var sum_of_digits = function(n) {

  var digits = n.toString().split("");

  var sum = digits.reduce(function(a, b) { return a + b; });

  return sum;
};

print(sum_of_digits(123));

// ****************************************************************************

// list with different types in JavaScript
var types = [
  5, // "number"
  "You look good!", // "string"
  { "name" : "Dude1"}, // "object"
  function(x) {
    return x * x;
  }, // "function"
  [1,2,3], // "object" :(
  true // "boolean"
];

types.forEach(function(value) {
  console.log(value, typeof value);
});

var a = 5;

if(typeof a === "number") {
  console.log(a + " is a number");
}

// ****************************************************************************

var sum = function(a, b) {
  if (typeof a === "number" && typeof b == "number") {
    return a + b;
  }

  else {
    throw new TypeError("Something is wrong with the types.");
  }
};

print(sum(5, 5));
// print(sum(5, "5"));

// ****************************************************************************

var concatStrings = function(a, b) {
  if (typeof a === "string" && typeof b == "string") {
    return a + b;
  }

  else {
    throw new TypeError("Something is wrong with the types.");
  }
};

print(concatStrings("hello", "world"));
// print(concatStrings("hello", 5));


//*****************************************************************************

var contains = function(element, arr) {
  return arr.some(function(x) {
    return x === element;});
};

print(contains(5, [1,2,3,4,5,6]));

//*****************************************************************************

var contains = function(element, arr) {
  return arr.every(function(x) {
    return typeof x === element;});
};

print(contains("number", [1,"2",3,4,5,6]));

//*****************************************************************************

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];


var groupBy = function(groupingFunction, arr) {

  var result = {};

  arr.forEach(function(value, index){
    var group = groupingFunction(value, index).toString();

    if(!result[group]) {
      result[group] = [];
    }
    result[group].push(value);
  });

  return result;
};

console.log("");
console.log(groupBy(function(student) {
  return student.course;},
  students));

//*****************************************************************************

console.log("");
var result = {};
var hmhm = students.forEach(function(x){
  var group = (x.course).toString();

  if(!result[group]) {
    result[group] = [];
  }

  result[group].push("da");

  });

console.log(result);

//*****************************************************************************

var countBy = function(countingFunction, arr) {
  var
    result= {},
    grouped = groupBy(countingFunction, arr);

    Object.keys(grouped).forEach(function(key) {
      result[key] = grouped[key].length;
    });
  return result;
};

console.log("");
console.log(countBy(function(student) {
  return student.course;
}, students));

//****************************************************************************

var always = function (x) {
  return function(x) {return x;};
};

var f = always(5);

print(always(5));


