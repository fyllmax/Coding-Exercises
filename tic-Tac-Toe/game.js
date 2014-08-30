/* global console:true, require:true; */

"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}


function validMove(place) {

  var xPos = parseInt(place[0]),
      yPos = parseInt(place[1]);

  if (1 <= xPos <= 3 && 1 <= yPos <= 3) {
    return true;
  }

  return false;
}


function doneMove (board, place) {

  if (board[parseInt(place[0]) - 1][parseInt(place[1]) - 1] !== "*") {
    return true;
  }

  return false;
}

function endOfGame(board) {

  if (board[0].indexOf("*") === -1 &&
      board[1].indexOf("*") === -1 &&
      board[2].indexOf("*") === -1 ) {
    return true;
  }

  return false;
}


function winGame(board, winner) {

  for (var i = 0; i < 3; i++) {

    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] == winner) {
      return true;
    }

    if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] == winner) {
      return true;
    }
  }

  if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] == winner) {
    return true;
  }

  return false;
}


function gameStatus(board, player1, player2) {


  if (winGame(board, "X")) {
    console.log(player1 + " is WINNER!!!");
    return true;
  }

  else if (winGame(board, "O")) {
    console.log(player2 + " is WINNER!!!");
    return true;
  }

  else if (endOfGame(board)) {
    console.log("NO WINNERS THIS TIME!!!");
    return true;
  }

  else {
    return false;
  }

}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],

    playerOne = prompt("Enter P1 name> ").toUpperCase(),
    playerTwo = prompt("Enter P2 name> ").toUpperCase(),
    xTurn = true,
    position = null;

  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Enter coordinates " + playerOne + ":");
    }

    else {
      console.log("Enter coordinates " + playerTwo + ":");
    }


    // this is blocking prompt
    position = prompt("x y>").split(" ");
    // console.log(position);

    if (validMove(position) && !doneMove(board, position)) {

      if (xTurn) {
        board[parseInt(position[0]) - 1][parseInt(position[1]) - 1] = "X";
      }

      else {
        board[parseInt(position[0]) - 1][parseInt(position[1]) - 1] = "O";
      }

      xTurn = !xTurn;

    }

    else if (validMove(position) && doneMove(board, position)) {
      console.log("Already used position.");
    }

    else {
      console.log("Try different coordinates.");
    }

    if (gameStatus(board, playerOne, playerTwo)) {
      break;
    }

  }
}

gameLoop();
