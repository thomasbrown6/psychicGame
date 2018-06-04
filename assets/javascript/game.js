 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = [ 
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z" 
    ];

 // ***VARIABLES
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

   // If statement so that the user can't enter a value outside of the choices
   // The application won't run unless user enters a valid entry
   if (computerChoices.includes(userGuess)) {

    // If statement so the user won't guess the same value twice
    if (choices.indexOf(userGuess) === -1) {

     // What to do when the user guesses right
     if (userGuess === computerGuess) {
         wins++;
         guessesLeft = 10;
         choices = [];

      // As long as the user has guesses left, subtract the gueses when the user guesses
      // wrong and push the user guess to the choices array
    } else if (guessesLeft > 1) {
       guessesLeft--;
       choices.push(userGuess);

      // If the user runs out of guesses then they lose and the guessesLeft and choices array 
      // will reset.
    } else {
        losses++;
        guessesLeft = 10;
        choices = [];
    }
}

   }

    
    // html to be inserted in index.html file
       var html =
       "<p>Wins: " + wins + "</p>" +
       "<p>Losses: " + losses + "</p>" +
       "<p>Guesses Left: " + guessesLeft + "</p>" +
       "<p>Your Guesses So Far: " + choices + "</p>" ;
       

    // Select the div with the id "game", and insert the following HTML into it.
     document.querySelector("#game").innerHTML = html;

 } 
 
 

 