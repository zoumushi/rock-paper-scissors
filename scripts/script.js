const buttons = document.getElementById(`buttons`);

let playerPoints = 0;
let computerPoints = 0;

function playRound(event) {
	if (event.target.id === "buttons") return;
	const playerChoice = event.target.id;
	const computerChoice = getComputerChoice();

	const winner = getWinner(playerChoice, computerChoice);

	if (winner === `player`) {
		playerPoints++;
	} else if (winner === `computer`) {
		computerPoints++;
	}

	updateUi(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
	const randomInt = Math.floor(Math.random() * 3);

	switch (randomInt) {
		case 0:
			return `rock`;
		case 1:
			return `paper`;
		case 2:
			return `scissors`;
	}
}

function getWinner(playerChoice, computerChoice) {
	switch (playerChoice) {
		case `rock`:
			switch (computerChoice) {
				case `rock`:
					return `tie`;
				case `paper`:
					return `computer`;
				case `scissors`:
					return `player`;
			}
		case `paper`:
			switch (computerChoice) {
				case `rock`:
					return `player`;
				case `paper`:
					return `tie`;
				case `scissors`:
					return `computer`;
			}
		case `scissors`:
			switch (computerChoice) {
				case `rock`:
					return `computer`;
				case `paper`:
					return `player`;
				case `scissors`:
					return `tie`;
			}
	}
}

function updateUi(playerChoice, computerChoice, winner) {
	const playerScore = document.getElementById(`player-score`);
	const computerScore = document.getElementById(`computer-score`);

	const playerSelection = document.getElementById(`player-selection`);
	const computerSelection = document.getElementById(`computer-selection`);

	const roundOutcome = document.getElementById(`round-outcome`)

	playerScore.textContent = playerPoints;
	computerScore.textContent = computerPoints;

	if (playerChoice === `rock`) {
		playerSelection.textContent = `✊`;
	} else if (playerChoice === `paper`) {
		playerSelection.textContent = `✋`;
	} else if (playerChoice === `scissors`) {
		playerSelection.textContent = `✌`;
	}

	if (computerChoice === `rock`) {
		computerSelection.textContent = `✊`;
	} else if (computerChoice === `paper`) {
		computerSelection.textContent = `✋`;
	} else if (computerChoice === `scissors`) {
		computerSelection.textContent = `✌`;
	}

	if (winner === `player`) {
		if (playerChoice === `scissors`) {
			roundOutcome.textContent = `${playerChoice} beat ${computerChoice}! you win!`
		} else {
			roundOutcome.textContent = `${playerChoice} beats ${computerChoice}! you win!`
		}
	} else if (winner === `computer`) {
		if (computerChoice === `scissors`) {
			roundOutcome.textContent = `${computerChoice} beat ${playerChoice}! you lose!`
		} else {
			roundOutcome.textContent = `${computerChoice} beats ${playerChoice}! you lose!`
		}
	} else {
		roundOutcome.textContent = `it's a tie!`
	}
}

buttons.addEventListener(`click`, playRound);