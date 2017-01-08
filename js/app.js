$(() => window.onload = new TicTacToe());

class TicTacToe {
  constructor() {

    // winning combo of Noughts & Crosses
    this.NoughtsWinningCombo = ['O', 'O', 'O'];
    this.CrossesWinningCombo = ['X', 'X', 'X'];

    //Player score and computer score which starts at zero

     this.theButtons = $('#NandC');
    this.player1ScoreCount = 0;
    this.player2ScoreCount = 0;
    this.player2 = false;
    this.player1 = true;
    this.currentplayer = this.player1;
    this.counter = 0;
    this.result;
    this.tablerow;
    this.ButtonEventListener();
  }

  ButtonEventListener() {
    $(this.theButtons).click((e) => {
      this.playerMove(e);

      this.counter++;
      if (this.counter >= 8) {
        this.matchIsADraw();
      }
    });
  }

  playerMove(target) {
 
  if (this.player1) {
    this.player2 = true;
    this.player1 = false;
    //this.playerOption = target.target
    $(target.target).text("X").css('font-size', '90px', 'text-align', 'center');
  } else {
    this.player1 = true;
    this.player2 = false;
    $(target.target).text("O").css('font-size', '90px', 'text-align', 'center');
  }
  this.getMoveSaved();
}

 getMoveSaved() {
 this.tablerow = $("tbody tr", $("#NandC")).map(function () {
   return [$("td", this).map(function () {
     return this.innerHTML;
   }).get()];
 }).get();
  this.checkDiagonal();
}

checkDiagonal() {
   this.tabledia1 = [this.tablerow[0][0], this.tablerow[1][1], this.tablerow[2][2]];
   this.tabledia2 = [this.tablerow[0][2], this.tablerow[1][1], this.tablerow[2][0]];
   //console.log(this.tabledia1);
    //console.log(this.NoughtsWinningCombo);
   this.tabledia1.toString() === this.CrossesWinningCombo.toString() ? this.Player1Output() :
   this.tabledia2.toString() === this.CrossesWinningCombo.toString() ? this.Player1Output() :
   this.tabledia1.toString() === this.NoughtsWinningCombo.toString() ? this.Player2Output() :
   this.tabledia2.toString() === this.NoughtsWinningCombo.toString() ? this.Player2Output() : this.checkColumns();


 }

 checkColumns() {

  for (let column in this.tablerow) {
    if (arrayColumn(this.tablerow, column).toString() === CrossesWinningCombo.toString()) {
      this.Player1Output();
    } else if (arrayColumn(this.tablerow, column).toString() === NoughtsWinningCombo.toString()) {
      this.Player2Output();
    } else {
      this.checkRows();
    }
  }
}

 checkRows() {
  for (i = 0; i <= this.tablerow.length; i++) {
    var rowvalue = this.tablerow[i];
    console.log(rowvalue);
    if (rowvalue.toString() === this.CrossesWinningCombo.toString()) {
      this.Player1Output();
    } else if (rowvalue.toString() === this.NoughtsWinningCombo.toString()) {
      this.Player2Output();
    } else {
      null;
    }


  }
}

//A function that perform actions if the Player1 wins
 Player1Output() {
  $("#resultmessage").html("Player1 wins");
  this.player1ScoreCount++;
  let theScore = document.getElementById("Player1count").innerHTML = this.player1ScoreCount;
  console.log(this.player1ScoreCount);
  this.resetTheBoard();
}
//A function that perform actions if the player2 wins
 Player2Output() {
  $("#resultmessage").html("Player2 wins");
  this.player2ScoreCount++;
  let theScore = document.getElementById("Player2count").innerHTML = this.player1ScoreCount;
  console.log(this.player1ScoreCount);
  this.resetTheBoard();
}
//function if the match is a draw
 matchIsADraw() {
  $("#resultmessage").html("its a draw");
  $("#NandC tbody tr td").html("");
  this.resetTheBoard();
}
//function to reset the board
 resetTheBoard() {
  $("#NandC tbody tr td").html("");
  counter = 0;
  console.log(counter);
}


}