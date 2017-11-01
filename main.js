var Word = require("./word.js");
var Game = require("./game.js")

var prompt = require("prompt");

console.log("Guess the name of a coding language!");

prompt.start();

var game = {
    wordBank: ["accent", "java", "javascript", "python", "html", "php", "ruby", "apex", "cobra"],
    wordsWon: 0,
    guessesLeft: 10,
    currentWord: null,

    startGame: function(word) {
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.getLetter();
        this.userPrompt();
    },

    resetGuesses: function() {
        this.guessesLeft = 10;
    },

    userPrompt: function() {
        var user = this;
        prompt.get(["guessLetter"], function(err, result) {
            console.log("You guessed: " + result.guessLetter);
            var howManyGuessed = user.currentWord.checkLetter(result.guessLetter);

            if (howManyGuessed == 0) {
                console.log("INCORRECT");
                user.guessesLeft--;
            } else {
                console.log("CORRECT");
                if (user.currentWord.findWord()) {
                    console.log("You win!");
                    console.log("-----------------------");
                    return;
                }
            }

            console.log("Guesses left: " + user.guessesLeft);
            console.log("-----------------------");

            if ((user.guessesLeft > 0) && (user.currentWord.found == false)) {
                user.userPrompt();
            } else if (user.guessesLeft == 0) {
                console.log("Game over! The correct word was: " + user.currentWord.word);
            } else {
                console.log(user.currentWord.wordRender());
            }
        });
    }
};

game.startGame();