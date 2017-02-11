var wordBank = ["snake", "mario", "link", "cloud", "raiden", "pikachu"];
var originalWord;
var word;
var guess;
var numGuessesRemaining;
var guessedLetters;
var shotRicochet = new Audio('./assets/sounds/shotRicochet');


reset();
update();
document.onkeyup = function(event) {
        // Determines which key was pressed
        var userGuess = event.key.toLowerCase();
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
                        update();
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
                        update();
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
        update()
 }

function update()
{
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
     if (confirm("You Win! The word was: " + originalWord.toString() + ". Would you like to try again?"))
     {
         reset();
         update();
     }
     console.log("You Win!");
}

function lose()
{
    document.getElementById("win-lose").textContent = "You Lose!";
         if (confirm("You lost! The word was: " + originalWord.toString() + ". Would you like to try again?"))
     {
         reset();
         update();
     }
     console.log("You Win!");
    console.log("You Lose!");
}

function reset()
{
    originalWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    word = originalWord.split('');
    guess = new Array(word.length);
    numGuessesRemaining = 12;
    guessedLetters = new Array(0);
    document.getElementById("win-lose").textContent = "";
    for (var i = 0; i < guess.length; i++)
    {
        guess[i] = "_";
    }
}