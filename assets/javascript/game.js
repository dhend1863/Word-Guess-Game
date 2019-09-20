// GLOBAL VARIABLES
// ===============================================================================================

var wordOptions = ["holmes", "gonzales", "sweeney", "brett", "yost", "reid", "mahomes", "dawson", "gordon", "watson", "perez"];
var selectedWord = "";
var numBlanks = 0;
var letterGuessed = [];
var blanksAndSuccesses = [];
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

    

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;

        }


    }

    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] == letter;
        }
    }

}

function checkLetters(letter) {
    
    
    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
            
        }
    }

    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
   
    else {
        wrongLetters.push(letter);
        numGuesses--
    }
 }


// ===============================================================================================
// MAIN PROCESS

// initiates the code 

startGame();

// Register Key Clicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);

    console.log(letterGuessed);
}










