angular.module('myApp')

.service('Gameplay', ['$http', function($http) {
  this.game = [];

  this.playerInt = null;

  this.generateGame = function(dice, players) {
    var that = this;

    $http.post('/games', { 'numDice': dice, 'numPlayers': players })
    .success(function(data, status, headers, config) {
      that.game.push(data);
    })
    .error(function(data, status, headers, config) {
      console.log('error');
    });

    return that.game;
  }

  this.grabPlayer = function(playerId) {
    return this.playerInt = playerId;
  }

  this.makeClaim = function(moveNumInt, moveFaceInt, claimNumInt, claimFaceInt) {  
    var that = this;
    
    var args = { 
      player: that.playerInt,
      moveNumber: moveNumInt,
      moveFace: moveFaceInt,
      claimNumber: claimNumInt,
      claimFace: claimFaceInt
    }

    $http.post('/games/' + that.game[0]._id + '/claim', args)
    .success(function(data, status, headers, config) {
      that.game.push(data.document)
    })
    .error(function(data, status, headers, config) {
      console.log('error');
    });

    return that.game;
  }
}]);
