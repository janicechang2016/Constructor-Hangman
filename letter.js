var letter = function(Letter) {
	this.character = Letter;
	this.appear = false;

	this.letterRender = function() {
		if (this.characters == " ") {
			this.appear = true;
			return " ";
		}
		if (this.appear == false) {
			return "_";
		}
		else {
			return this.character;
		}
	};
};

module.exports = letter;