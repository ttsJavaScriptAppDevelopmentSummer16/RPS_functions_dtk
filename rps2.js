var hands = ["rock", "paper", "scissors"];
var player1Wins = 0;
var player2Wins = 0;

// note: to get a different random # with each loop, function must be inside the object! (must run each time playRound is called)
// (this stumped me for like an hour)
var player1 = {
	name: "Dustin",
	getHand: function() {
		var random = parseInt(Math.random()*10)%3;
		return hands[random];
	}
}

var player2 = {
	name: "Yassi",
	getHand: function() {
		var random = parseInt(Math.random()*10)%3;
		return hands[random];
	}
}

function playRound(play1, play2) {
	if (play1.getHand() === play2.getHand()) {
		console.log("It's a tie!");
	} else if (
		(play1.getHand() === "rock" && play2.getHand() === "scissors") ||
		(play1.getHand() === "paper" && play2.getHand() === "rock") ||
		(play1.getHand() === "scissors" && play2.getHand() === "paper")
		) 
	{
		console.log(play1.name + " threw " + play1.getHand() + ". " + play2.name + " threw " + play2.getHand() + ". " + player1.name + " wins the round!");
		player1Wins += 1;
		// return player1;
	} else {
		console.log(play2.name + " threw " + play2.getHand() + ". " + play1.name + " threw " + play1.getHand() + ". " + player2.name + " wins the round!");
		player2Wins += 1;
		// return player2;
	}
}

function playGame(play1, play2, playUntil) {
	while ( player1Wins < playUntil && player2Wins < playUntil ) {
		playRound(play1, play2);
	};
}


playGame(player1, player2, 5); 

if ( player1Wins === 5 ) {
	console.log("Congratulations " + player1.name + ", you're the grand champion!");
} else {
	console.log("Excellent job, " + player2.name + ", you're victorious!");
}

