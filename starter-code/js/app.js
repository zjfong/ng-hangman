console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller('hangmanCtrl', hangmanCtrl);
var list = ['animal', 'elephant', 'basket', 'earthquake', 'hangman'];


function hangmanCtrl(){
  var vm = this;
  vm.game = new HangmanGame('elephant');
  vm.score = 0;

  vm.guessLetter = function(){
    var lower = vm.input.toLowerCase();
    vm.game.guess(lower);
    vm.input = "";

    if(vm.game.gameWon === true){
      vm.game = new HangmanGame(list[Math.floor(Math.random() * (list.length))]);
      vm.game.gameWon = null;
      vm.score++;
    } else if(vm.game.gameWon === false){
      vm.game = new HangmanGame(list[Math.floor(Math.random() * (list.length))]);
      vm.game.gameWon = null;
      vm.score--;
    }
  }
}


