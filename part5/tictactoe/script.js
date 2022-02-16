let origBoard = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
let p1 = 'X';
let p2 = 'O';
var gameWon = false;


let winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
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
    document.getElementById(squareId).innerText = player
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