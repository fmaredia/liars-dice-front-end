app.controller('DashCtrl', ['$scope', 'Gameplay', function($scope, Gameplay) {
  $scope.game = Gameplay.game;
  $scope.currentPlayer = Gameplay.playerInt;
  $scope.currentHand = Gameplay.game[0].playerHands[Gameplay.playerInt];

  $scope.claim = function(moveNum, moveFace, claimNum, claimFace) {
    Gameplay.makeClaim(moveNum, moveFace, claimNum, claimFace)
  }
}]);