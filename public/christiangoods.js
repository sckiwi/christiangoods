'use strict';

var app = angular.module('christiangoods', ['firebase','ngMaterial']);

app.controller('main', function($scope, $firebaseObject) {

  // var firebaseRef = new Firebase("https://colorwars.firebaseio.com/");
  // var firebaseObj = $firebaseObject(firebaseRef);
  // firebaseObj.$bindTo($scope, "bitMap").then(function(){
  //   //This puts the list of square bitIds in the right variable for the ng-repeat, but not until after the data is retrieved
  //   $scope.bitIds = $scope.bitIdsSource;
  // });

});
