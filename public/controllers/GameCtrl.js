app.controller('GameCtrl', ['$scope', 'Gameplay', function($scope, Gameplay) {
  $scope.game = '';
  $scope.currentPlayer = '';

  // generates a game based on an inputted number of dice and players
  $scope.createGame = function(dice, players) {
    dice = dice > 5 ? dice = 5 : dice; // implements a 5 dice upper limit
    $scope.game = Gameplay.generateGame(dice, players);
    return $scope.game;
  }

  // sets current player in the service for access in other controllers
  $scope.getPlayer = function(playerInt) {
    $scope.currentPlayer = Gameplay.grabPlayer(playerInt);
  }

}]);