 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = [ 
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z" 
    ];

 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var choices = [];


 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   // Randomly chooses a choice from the options array. This is the Computer's guess.
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
   if (choices.indexOf(userGuess) === -1) {

    if (userGuess === computerGuess) {
       wins++;
       guessesLeft = 10;
       choices = [];
    
    

    } else if (userGuess ==! computerChoices) {
    alert("Oops, have to choose a letter.");

    } else if (guessesLeft > 0) {
       guessesLeft--;
       var x = choices.push(userGuess);

    } else {
        losses++;
        guessesLeft = 10;
        choices = [];
    }
}

    

       var html =
       "<p>Wins: " + wins + "</p>" +
       "<p>Losses: " + losses + "</p>" +
       "<p>Guesses Left: " + guessesLeft + "</p>" +
       "<p>Your Guesses So Far: " + choices + "</p>" ;
       

    // Select the div with the id "game", and insert the following HTML into it.
     document.querySelector("#game").innerHTML = html;

 } 
 
 

 