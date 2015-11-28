app.controller('DashCtrl', ['$scope', 'Gameplay', function($scope, Gameplay) {

  $scope.claim = function(player, moveNum, moveFace, claimNum, claimFace) {
    Gameplay.makeClaim(player, moveNum, moveFace, claimNum, claimFace)
  }
}]);