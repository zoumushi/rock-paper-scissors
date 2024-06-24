let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
	return prompt("Choose a shape: ");
}

function getComputerChoice() {
	const randomInt = Math.floor(Math.random() * 3);

	switch (randomInt) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();
		if (humanChoice === "rock") {
			if (computerChoice === "paper") {
				console.log("You Lose! Paper beats rock");
				computerScore += 1;
			} else if (computerChoice === "scissors") {
				console.log("You Win! Rock beats scissors");
				humanScore += 1;
			}
		} else if (humanChoice === "paper") {
			if (computerChoice === "scissors") {
				console.log("You Lose! Scissors beat paper");
				computerScore += 1;
			} else if (computerChoice === "rock") {
				console.log("You Win! Paper beats rock");
				humanScore += 1;
			}
		} else if (humanChoice === "scissors") {
			if (computerChoice === "rock") {
				console.log("You Lose! Paper beats rock");
				computerScore += 1;
			} else if (computerChoice === "paper") {
				console.log("You Win! Scissors beat paper");
				humanScore += 1;
			}
		} else {
			console.log("Invalid shape");
		}
	}

	for (i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}
}

playGame();