// Sanity check
console.log('app.js loaded!');

// App
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl);

// Controllers
hangmanCtrl.$inject = ["$scope"];
function hangmanCtrl($scope) {
  // initialize a new game
  $scope.hangman = new HangmanGame("elephant");
  // helper function for the view
  $scope.guessLetter = function(input) {
    // guess the letter
    $scope.hangman.guess(input);
    // clear the input
    $scope.hangman.input = "";
  }
}