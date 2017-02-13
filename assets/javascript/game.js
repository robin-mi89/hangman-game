var wordBank = ["eleven", "waffles", "sheriff", "demogorgon", "mike", "dustin", "lucas"];
var originalWord = "";
var word = [];
var guess = [];
var numGuessesRemaining = 12;
var guessedLetters = [];
var wins = 0;
var losses = 0;
var victorySound = new Audio("../sounds/victory.mp3");
var mainImage = document.getElementById("mainImage");
mainImage.src = "assets/images/stranger-game.gif"


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
        document.getElementById("guess-word").textContent = guess.join(" ");
        document.getElementById("remaining").textContent = "You have " + numGuessesRemaining + " guesses remaining."
        document.getElementById("guessed-letters").textContent = "You have guessed: " + guessedLetters.toString();


        console.log(guess.toString());
        console.log("You have " + numGuessesRemaining + " guesses remaining.");
        console.log("Previously guessed letters " + guessedLetters.toString());
        

        if (numGuessesRemaining < 3)
        {
            mainImage.src = "assets/images/less3.png";
        }
        else if (numGuessesRemaining < 6)
        {
            mainImage.src = "assets/images/less6.jpg";
        }
        else if (numGuessesRemaining < 9)
        {
            mainImage.src = "assets/images/less9.gif";
        }
        else if (numGuessesRemaining <= 12)
        {
            mainImage.src = "assets/images/begin.jpg";
        }
        
}

function win()
{
     clear()
     document.getElementById("victorySound").play();
     document.getElementById("win-lose").textContent = "You Win! Insert Another Quarter to Play Again!";
     mainImage.src = 'assets/images/kids-group.jpg';
     wins++
     document.getElementById("winCount").textContent = "Wins: " + wins;
     console.log("You Win!");
}

function lose()
{
    clear();
    document.getElementById("win-lose").textContent = "You Lose! Insert Another Quarter to Play Again!";
    mainImage.src = 'assets/images/demogorgon.jpg';
    losses++
    document.getElementById("lossCount").textContent = "Losses: " + losses;
    
    console.log("You Lose!");
}

function clear()
{
    document.getElementById("quarterPrompt").textContent = "";
    document.getElementById("guess-word").textContent ="";
    document.getElementById("remaining").textContent = ""
    document.getElementById("guessed-letters").textContent = "";
}

function reset()
{

    originalWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    word = originalWord.split('');
    guess = new Array(word.length);
    numGuessesRemaining = 12;
    guessedLetters = new Array(0);
    document.getElementById("win-lose").textContent = "";
    document.getElementById("quarterPrompt").textContent = "Try to Guess the Word";
    mainImage.src = 'assets/images/stranger-game.gif';
   
    
    for (var i = 0; i < guess.length; i++)
    {
        guess[i] = "_";
    }
}

$("#btnStart").on("click", function() {
	reset();
    update();
})