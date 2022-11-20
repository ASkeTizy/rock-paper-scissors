function getComputedChoice() {
	let comp = Math.floor(Math.random() * 3);
	switch(comp) {
		case 0: return 'rock';
		case 1: return 'paper';
		case 2: return 'scissors';
	}
}

function getPlayerChoice(playerChoice) {
	let ans = playerChoice.toLowerCase();
	switch (ans) {
		case 'rock': return ans;
		case 'paper': return ans;
		case 'scissors': return ans;
		
	}


}

function playRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) return 'withdraw'; 
	return playerChoice == 'rock' && computerChoice == 'paper' 
		   || playerChoice == 'scissors' && computerChoice == 'rock'
		   || playerChoice == 'paper' && computerChoice == 'scissors'
		    ? `You lose ${computerChoice} bits ${playerChoice}` 
			: `You win ${playerChoice} bits ${computerChoice}`; 
	
}

function drawCounter(computerCounter, playerCounter) {
	let compCount = document.getElementById('comp');
	let playerCount = document.getElementById('player');
	compCount.innerText = computerCounter; 
	playerCount.innerText = playerCounter;
}
	let playerCounter = 0;
	let computerCounter = 0;

function game(element, counterEvent) {
	let result = '';
	let ans = '';
		let playerChoice = getPlayerChoice(element);		
		let computerChoice = getComputedChoice();
		result = playRound(playerChoice, computerChoice);
		if (result.includes('You lose')) computerCounter++;
		if (result.includes('You win')) playerCounter++;
		if (result.includes('withdraw')) {
			computerCounter++;
			playerCounter++;
		}
		drawCounter(playerCounter, computerCounter)
		if (counterEvent == 4) {
			if (playerCounter == computerCounter) ans = 'Withdraw';	
			ans = playerCounter > computerCounter ? 'Player win' : 'Computer win';
			playerCounter = 0;
			computerCounter = 0;
		}
		return ans;

}
const result = document.createElement('p');
result.classList.add('buttons');
let counterEvent = 0;
let buttonList = document.querySelectorAll('div.buttons');
	buttonList.forEach(function(i){
		i.addEventListener('click', (e) => { 
			let ans = game(e.target.id, counterEvent);
			counterEvent++;
			result.innerHTML = ans;
			if (counterEvent > 4) counterEvent = 0;
		});

	});
document.getElementsByClassName('content')[0].appendChild(result);
