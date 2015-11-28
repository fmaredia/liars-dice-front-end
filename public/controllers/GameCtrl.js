app.controller('GameCtrl', ['$scope', 'Gameplay', function($scope, Gameplay) {
  $scope.game = '';

  $scope.createGame = function(dice, players) {
    dice = dice > 5 ? dice = 5 : dice; // implements a 5 dice upper limit
    $scope.game = Gameplay.generateGame(dice, players);
    return $scope.game;
  }

  $scope.toggle = function(hand, $index) {
     hand.show = !hand.show;
   }
}]);