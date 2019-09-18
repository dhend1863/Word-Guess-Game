// GLOBAL VARIABLES
// ===============================================================================================

var wordOptions = ["priest holmes", "tony gonzales", "mike sweeney", "george brett", "satchel paige", "buck o'neill", "patrick mahomes", "len dawson", "alex gordon", "tom watson"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// ===============================================================================================
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];    
    

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);

}

// ===============================================================================================
// MAIN PROCESS

startGame();