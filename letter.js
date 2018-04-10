 function Letter(letter){

        this.letter = letter;
        this.isLetter = false;
    


    }

Letter.prototype.guessLetter = function(letter){
    if(this.letter === letter && this.isLetter === false){

        this.isLetter = true;
        return this.letter;
        
    } else {
        return '_ ';
    }
}

module.exports = Letter;
