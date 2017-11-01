var letter = require("./letter.js");

function Word(word) {
	this.word = word;
	this.letters = [];
	this.foundLetter = false; 

	this.getLetter = function() {
		for (var i=0; i < this.word.length; i++) {
			this.letters.push(new letter(this.word[i]));
		}
	};

	this.findWord = function() {
		this.foundLetter = this.letters.every(function(currentLetter) {
			return currentLetter.appear == true;
		});
		return this.foundLetter = true;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;
		for (var i=0; i<this.letters.length; i++) {
			if (this.letters[i].characters == guessLetter) {
				this.letters[i].appear = true;
				toReturn++;
			}
		} 
		return toReturn;
	};

	this.wordRender = function() {
		var display = "";

		for (var i=0; i<this.letters.length; i++) {
			display += this.letters[i].letterRender();
		}
		return display;
	};
}

module.exports = Word;