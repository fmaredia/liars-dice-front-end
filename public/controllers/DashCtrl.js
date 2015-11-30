app.controller('DashCtrl', ['$scope', 'Gameplay', function($scope, Gameplay) {
  $scope.game = Gameplay.game; // grabs the current game from the service
  $scope.currentPlayer = Gameplay.playerInt; // grabs the currentplayer from the service
  $scope.currentHand = Gameplay.game[0].playerHands[Gameplay.playerInt]; // grabs the player's current hand from the service
  $scope.bool = '';

  // function that allows the user to make a claim
  $scope.claim = function(moveNum, moveFace, claimNum, claimFace) {
    Gameplay.makeClaim(moveNum, moveFace, claimNum, claimFace);
  }
 
  // function that allows the user to challenge another
  $scope.challenge = function(challengedInt) {
    $scope.bool = Gameplay.challenge(challengedInt);
  }

}]);