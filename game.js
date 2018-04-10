var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

var randomWordsArray = ['apple', 'charlie', 'tango', 'delta'];

var randomNumber = Math.floor(Math.random() * Math.floor(randomWordsArray.length));

var theChosenOne = randomWordsArray[randomNumber];

console.log(theChosenOne);

var newWord = new Word(theChosenOne);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter a letter to guess',
            name: 'answer'

        }]).then(function(data){
                
                var chosenLetter = data.answer;
            
                newWord.wordsToLetter(chosenLetter);

            
        })









     