// GLOBAL VARIABLES
// ===============================================================================================

var wordOptions = ["priest holmes", "tony gonzales", "mike sweeney", "george brett", "satchel paige", "buck oneill", "patrick mahomes", "len dawson", "alex gordon", "tom watson"];
var selectedWord = "";
var numBlanks = 0;
var letterGuessed = [];
var blanksAndSuccess = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// ===============================================================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // enter blanks and successes
    var hyphenword = "";
    for (var i = 0; i < numBlanks; i++) {
        hyphenword += " _ "
    }

    // CHANGE HTML TO REFLECT ROUND CONDITIONS
    document.getElementById("wordToGuess").innerHTML = hyphenword;
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {

    alert(letter);

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;

        }


    }
}




// ===============================================================================================
// MAIN PROCESS

// initiates the code 

startGame();










