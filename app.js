var hangman = angular.module('hangman', []);

hangman.controller('hangmanCtrl', function($scope){
    $scope.states = [
        "imgs/hangman.png",
        "imgs/hangman-head.png",
        "imgs/hangman-body.png",
        "imgs/hangman-one-arm.png",
        "imgs/hangman-other-arm.png",
        "imgs/hangman-one-leg.png",
        "imgs/hangman-other-leg.png",
    ];
    $scope.currentState = 0;

    $scope.words = ["website", "challenge", "internet", "awesome", "application"];
    $scope.word = $scope.words[Math.floor(Math.random()*$scope.words.length)];

    $scope.guessedLetters = new Array($scope.word.length);

    $scope.letters = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z"];
    $scope.selectedLetters = [];

    $scope.gameEnded = false;


    /////

    $scope.selectLetter = function(letter){
        $scope.selectedLetters.push(letter);
        if ($scope.word.indexOf(letter) > -1) {
            for (i = 0; i < $scope.word.length; i++) {
                if ($scope.word[i] === letter) {
                    $scope.guessedLetters[i] = letter;
                }
            }
        }
        else {
            $scope.currentState++;
        }
        if ($scope.currentState == $scope.states.length - 1) {
            $scope.gameEnded = true;
        }
        else if ($scope.guessedLetters.join("") == $scope.word) {
            $scope.gameEnded = true;
        }
    }

    $scope.startNewGame = function(){
         $scope.gameEnded = false;
         $scope.currentState = 0;
         $scope.word = $scope.words[Math.floor(Math.random()*$scope.words.length)];
         $scope.guessedLetters = new Array($scope.word.length);
         $scope.selectedLetters = [];
    }
});
