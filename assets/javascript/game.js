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

    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // CHANGE HTML TO REFLECT ROUND CONDITIONS
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
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
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
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
        guessesLeft--
    }

    console.log(blanksAndSuccesses);


}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join (" ");

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = winCount;
        
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");

    }
    
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();

    


}


// ===============================================================================================
// MAIN PROCESS

// initiates the code 

startGame();

// Register Key Clicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}










