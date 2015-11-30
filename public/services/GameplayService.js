angular.module('myApp')

.service('Gameplay', ['$http', function($http) {
  this.game = [];

  this.playerInt = null;

  // grabs game data and stores it in this.game array
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
  
  // grabs playerId argument and stores it as this.playerInt in the service
  this.grabPlayer = function(playerId) {
    return this.playerInt = playerId;
  }
  
  // grabs user claim data and stores it in this.game array
  this.makeClaim = function(moveNumInt, moveFaceInt, claimNumInt, claimFaceInt) {  
    var that = this;
    
    var args = { 
      'player': that.playerInt,
      'moveNumber': moveNumInt,
      'moveFace': moveFaceInt,
      'claimNumber': claimNumInt,
      'claimFace': claimFaceInt
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
  
  // returns a boolean for whether the user's challenge is right or not
  this.challenge = function(challengedInt) {  
    var that = this;
    var bool = null;

    $http.post('/games/' + that.game[0]._id + '/challenge', { 'player': challengedInt })
    .success(function(data, status, headers, config) {
      bool = data;
    })
    .error(function(data, status, headers, config) {
      console.log('error');
    });

    return bool;
  }
}]);
