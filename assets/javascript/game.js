var wordBank = ["sample", "sample2", "sample3"];
var word;
var guess;
var numGuessesRemaining;
var guessedLetters;

reset();

document.onkeyup = function(event) {
        // Determines which key was pressed
        var userGuess = event.key;
        var isInWord = false;
        console.log("You guessed: " + userGuess);
       
        
        if (guessedLetters.indexOf(userGuess) === -1)
        {
            for (var i = 0; i < word.length; i++) //loops through the word's letters
            {
                if (userGuess == word[i]) //word does contain guessed letter
                {
                    isInWord = true;
                    console.log("word contains letter");
                    guess[i] = word[i];
                    if (guess.indexOf("_") == -1)
                    {
                        win(); //no more blanks left, player wins.
                        return;
                    }
                }
            }

            if (isInWord === false)
            {
                console.log("word does not contain letter");
                numGuessesRemaining--;
                    if (numGuessesRemaining <= 0) //no more guesses remaining
                    {
                        lose();
                        return;
                    }
                
            }
            guessedLetters.push(userGuess); //adds guessed letters to a list
        }
        else 
        {
            console.log("You have already guessed that letter")
        }
        document.getElementById("guess-word").textContent = guess.toString();
        document.getElementById("remaining").textContent = "You have " + numGuessesRemaining + " guesses remaining."
        document.getElementById("guessed-letters").textContent = guessedLetters.toString();


        console.log(guess.toString());
        console.log("You have " + numGuessesRemaining + " guesses remaining.");
        console.log("Previously guessed letters " + guessedLetters.toString());
 }

function win()
{
     document.getElementById("win-lose").textContent = "You Win!";
     if (confirm("You Win! Would you like to try again?"))
     {
         reset();
     }
     console.log("You Win!");
}

function lose()
{
    document.getElementById("win-lose").textContent = "You Lose!";
    console.log("You Lose!");
}

function reset()
{
    word = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
    guess = new Array(word.length);
    numGuessesRemaining = 12;
    guessedLetters = new Array(0);

    for (var i = 0; i < guess.length; i++)
    {
        guess[i] = "_";
    }

    //document.getElementById("guess-word").textContent = guess.toString();
    console.log(guess.toString());
}