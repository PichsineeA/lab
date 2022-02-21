let origBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
let p1 = 'X';
let p2 = 'O';
var gameWon = false;


let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
	[0, 4, 8],
    [6, 4, 2],
]


let cells = document.querySelectorAll('.cell');
for(var i =0; i < cells.length; i++){
    cells[i].addEventListener('click', turnClick, false);
}


function turnClick(square){
	turn(square.target.id, p1);
	if(!checkTie()){
		turn(emptyCell(), p2);
	}
}


function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player)
	if(gameWon) gameOver(gameWon)
}

function emptyCell() {
	var emptyArr = [];
  	for(i=0;i<origBoard.length;i++){
  		if(origBoard[i] === '#'){
  			emptyArr.push(i);
  		}
  	}
  	var x = Math.round(Math.random() * emptyArr.length);
  	var choice = emptyArr[x];
  	if (choice === undefined) {
  		choice = emptyArr[x - 1];
  	}
  	return choice;
}

function checkTie(){
	var emptyArr2 = [];
  	for(i=0;i<origBoard.length;i++){
  		if(origBoard[i] === '#'){
  			emptyArr2.push(i);
  		}
  	}
	if(emptyArr2 == 0){
		document.querySelector("h2").innerHTML = "Tie";
	}
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winner.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winner[gameWon.index]) {
		document.querySelector("h2").innerHTML=
			gameWon.player == p1 ? "You win!" : "You lose";
	}
}
