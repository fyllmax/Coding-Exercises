"use strict";

$(document).ready(function() {

  var canvas = document.getElementById("hackCanvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var meat;

  function Tile (x, y, size, context) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.context = context;

    this.print = function() {
      context.fillStyle = "green";
      context.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    };
  }

  var snake = (function(context) {

    var tail = [];

    [1, 2, 3].forEach(function(i) {
      tail.push(new Tile(i, 0, 10, context));
    });

    var head = tail[tail.length - 1];
    var direction = "right";
    var dead = false;

    // tail.push(head);

    var getHead = function () {
      return head;
    };

    var kill = function () {
      dead = true;
    };

    var getTail = function () {
      return tail;
    };

    var print = function () {
      tail.forEach(function (pixel) {
        pixel.print();
      });
    };

    var onFood = function(){
      if(head.x === food.getX() && head.y === food.getY()){
        return true;
      }

      else {
        return false;
      }
    };

    var move = function(){
      var newHead;
      if(dead) {
        return false;
      }
      else if(direction === "right") {
        newHead = new Tile(head.x+1, head.y, 10, context);
      }
      else if(direction === "down") {
        newHead = new Tile(head.x, head.y+1, 10, context);
      }
      else if(direction === "up") {
        newHead = new Tile(head.x, head.y-1, 10,  context);
      }
      else if(direction === "left") {
        newHead = new Tile(head.x-1, head.y, 10, context);
      }

    if (onFood(food)) {
      food.randFood();
    }

    else {
      tail.shift();
    }

    // if (canibalize) {
    //   snake.kill();
    // }

      tail.push(newHead);
      head = newHead;
    };


  var setDirection = function(dir){

    if(direction === "left" && dir === "right" ||
       direction === "right" && dir === "left" ||
       direction === "up" && dir === "down" ||
       direction === "down" && dir === "up") {
    return false;
    }

    direction = dir;
  };

    return {
      print: print,
      move : move,
      setDirection:setDirection,
      kill : kill,
      onFood: onFood,
      getHead : getHead,
      getTail : getTail
    };

  }(context));

  $(document).keydown(function (e){
    if(e.keyCode == 37){
      snake.setDirection("left");
    }
    else if (e.keyCode == 38){
      snake.setDirection("up");
    }
    else if (e.keyCode == 39){
      snake.setDirection("right");
    }
    else if (e.keyCode == 40){
      snake.setDirection("down");
    }
  });

  var food = (function (context){
    meat = new Tile(5, 8, 10, context);

    var getX = function(){
      return meat.x;
    };

    var getY = function(){
      return meat.y;
    };

    var print = function(){
      meat.print();
    };

    var randFood = function () {
      var x = Math.round(Math.random()*(width - 10) / 10),
          y = Math.round(Math.random()*(height - 10) / 10);

      meat = new Tile(x, y, 10, context);
      };

    return {
      getX: getX,
      getY: getY,
      print: print,
      randFood: randFood
    };
  }(context));

  var canibalize = function (snake) {

    var tailParts = snake.getTail();
    var n = tailParts.length;
    for (var i = 0; i < n; i ++) {
      if(tailParts[i].x == snake.getHead().x && tailParts[i].y == snake.getHead().y) {
          snake.kill();
          console.log("izqdoh se");
      }
      return false;
    }

  };

  var checkBorders = function (snake) {
    if(snake.getHead().x >= (width / 10) || snake.getHead().y >= (height / 10) || snake.getHead().x < 0 || snake.getHead().y <0) {
      snake.kill();
    }
  };

  setInterval(function () {
    context.clearRect(0, 0, width, height);
    snake.move(food);
    snake.print();
    meat.print();
    canibalize(snake);
    checkBorders(snake);
  }, 100);

});
