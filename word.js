var Letter = require('./letter.js');


function Word(arrayWord){
    this.arraySplit = arrayWord.split('');
}

Word.prototype.wordsToLetter = function(letter){

        var mappedArray = this.arraySplit.map(function(letter){
            var newLetter = new Letter(letter);
            return newLetter.guessLetter(letter);
        });

       console.log(mappedArray);
    }

module.exports = Word;

