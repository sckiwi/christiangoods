'use strict';

var app = angular.module('christiangoods', ['firebase','ngMaterial']);

app.controller('main', function($scope, $firebaseObject) {

  $scope.products = {};

  var firebaseRef = new Firebase("https://christiangoods.firebaseio.com/products");
  var firebaseObj = $firebaseObject(firebaseRef);
  firebaseObj.$bindTo($scope, "products").then(function(){
    // run code after the products come back from Firebase
    // Nothing to do right now
  });

});
