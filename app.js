const rollbtn = document.querySelector(".btn-roll");
const newbtn = document.querySelector(".btn-new");
const holdbtn = document.querySelector(".btn-hold");
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player-0-panel");
const player2 = document.querySelector(".player-1-panel");
let currentScore = 0;
let activePlayer;

rollbtn.addEventListener('click', function() {

	activePlayer = document.querySelector(".active");
	let rndnum = Math.floor(Math.random() * 6 ) + 1;
	
	dice.attributes.src.value = `dice-${rndnum}.png`;
 
	currentScore += rndnum; 
	activePlayer.querySelector(".player-current-score").innerText = currentScore;

	if (rndnum === 1) {
		if(activePlayer.classList[0] === "player-0-panel") {
			activePlayer.querySelector(".player-current-score").innerText = 0;
			activePlayer.classList.remove("active");
			player2.classList.add("active");
			currentScore = 0;
		}
		else if (activePlayer.classList[0] === "player-1-panel") {
			activePlayer.querySelector(".player-current-score").innerText = 0;
			activePlayer.classList.remove("active");
			player1.classList.add("active");
			currentScore = 0;
		}
	}
});

newbtn.addEventListener('click', function() {
	
	rollbtn.removeAttribute("disabled", 'disabled');
	holdbtn.removeAttribute("disabled", 'disabled');

	player1.children[1].innerText = 0;
	player2.children[1].innerText = 0;

	activePlayer = document.querySelector(".active");
	activePlayer.classList.remove("active");
	player1.classList.add("active");
});

holdbtn.addEventListener('click', function() {
	activePlayer.children[1].innerText = Number(activePlayer.children[1].innerText) + currentScore;

	if (Number(activePlayer.children[1].innerText) >= 100) {
		activePlayer.children[0].innerText = "Winner"
		activePlayer.classList.add("winner");
		rollbtn.setAttribute("disabled", 'disabled');
		holdbtn.setAttribute("disabled", 'disabled');
	}

	if(activePlayer.classList[0] === "player-0-panel") {
		activePlayer.querySelector(".player-current-score").innerText = 0;
		activePlayer.classList.remove("active");
		player2.classList.add("active");
		currentScore = 0;
	}
	else if (activePlayer.classList[0] === "player-1-panel") {
		activePlayer.querySelector(".player-current-score").innerText = 0;
		activePlayer.classList.remove("active");
		player1.classList.add("active");
		currentScore = 0;
	}

	
});
