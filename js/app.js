document.addEventListener('DOMContentLoaded', function () {

  // winning combo of Noughts & Crosses
  let NoughtsWinningCombo = ['O', 'O', 'O'];
  let CrossesWinningCombo = ['X', 'X', 'X'];

  //Player score and computer score which starts at zero
  let player1ScoreCount = 0;
  let player2ScoreCount = 0;
  let player2 = false;
  let player1 = true;
  let currentplayer = player1;

  let counter = 0;
  let result;
  let theButtons = $('#NandC');
  let tablerow;


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(theButtons).click((e) => {
    playerMove(e);
    counter++;
    //  console.log(counter);
    if (counter >= 8) {
      // console.log("click number is 8");
      matchIsADraw();
    }

  });

  function playerMove(target) {
    //console.log(target.target.id);
    if (player1) {
      player2 = true;
      player1 = false;
      $(target.target).text("X").css('font-size', '90px', 'text-align', 'center');
    } else {
      player1 = true;
      player2 = false;
      $(target.target).text("O").css('font-size', '90px', 'text-align', 'center');
    }
    getMoveSaved();
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //function get column of array
  //para1 array - Object
  //para2 number - int
  //returns array column
  function arrayColumn(arr, n) {
    return arr.map(x => x[n]);
  }

  // function turns table in from end into an array
  function getMoveSaved() {
    tablerow = $("tbody tr", $("#NandC")).map(function () {
      return [$("td", this).map(function () {
        return this.innerHTML;
      }).get()];
    }).get();
    checkDiagonal();
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  function checkDiagonal() {
    let tabledia1 = [tablerow[0][0], tablerow[1][1], tablerow[2][2]];
    let tabledia2 = [tablerow[0][2], tablerow[1][1], tablerow[2][0]];
    tabledia1.toString() === CrossesWinningCombo.toString() ? Player1Output() :
      tabledia2.toString() === CrossesWinningCombo.toString() ? Player1Output() :
        tabledia1.toString() === NoughtsWinningCombo.toString() ? Player2Output() :
          tabledia2.toString() === NoughtsWinningCombo.toString() ? Player2Output() : checkColumns();

  }

  function checkColumns() {

    for (let column in tablerow) {
      if (arrayColumn(tablerow, column).toString() === CrossesWinningCombo.toString()) {
        Player1Output();
      } else if (arrayColumn(tablerow, column).toString() === NoughtsWinningCombo.toString()) {
        Player2Output();
      } else {
        checkRows();
      }
    }
  }

  function checkRows() {
    for (i = 0; i <= tablerow.length; i++) {
      var rowvalue = tablerow[i];
      //console.log(rowvalue);
      if (rowvalue.toString() === CrossesWinningCombo.toString()) {
        Player1Output();
      } else if (rowvalue.toString() === NoughtsWinningCombo.toString()) {
        Player2Output();
      } else {
        null;
      }


    }
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //A function that perform actions if the Player1 wins
  function Player1Output() {
    $("#resultmessage").html("Player1 wins");
    player1ScoreCount++;
    let theScore = document.getElementById("Player1count").innerHTML = player1ScoreCount;
    console.log(player1ScoreCount);
    resetTheBoard();
  }
  //A function that perform actions if the player2 wins
  function Player2Output() {
    $("#resultmessage").html("Player2 wins");
    player2ScoreCount++;
    let theScore = document.getElementById("Player2count").innerHTML = player2ScoreCount;
    console.log(player2ScoreCount);
    resetTheBoard();
  }
  //function if the match is a draw
  function matchIsADraw() {
    $("#resultmessage").html("its a draw");
    $("#NandC tbody tr td").html("");
    resetTheBoard();
  }
  //function to reset the board
  function resetTheBoard() {
    $("#NandC tbody tr td").html("");
    counter = 0;
    console.log(counter);
  }
});