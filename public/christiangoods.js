'use strict';

var app = angular.module('christiangoods', ['firebase','ngMaterial']);

app.controller('main', function($scope, $firebaseObject) {

  $scope.shopperEmail = "spencergclark@gmail.com";
  $scope.products = {};

  var firebaseRef = new Firebase("https://christiangoods.firebaseio.com/products");
  var firebaseObj = $firebaseObject(firebaseRef);
  firebaseObj.$bindTo($scope, "products").then(function(){
    // run code after the products come back from Firebase
    // Nothing to do right now
  });

  $scope.likesCount = function(product) {
    return (product.likes)?Object.keys(product.likes).length:0;
  };

  $scope.getProductImageStyle = function(product) {
    return {
      "background-image": "url('" + product.imageUrl + "')"
    };
  };

  $scope.mikeLikesIt = function(product) {
    if (product.likes) {
      for (var i = 0; i < Object.keys(product.likes).length; i++) {
        var likeEmail = product.likes[Object.keys(product.likes)[i]];
        if (likeEmail.toLowerCase() == $scope.shopperEmail.toLowerCase()) {
          return true;
        }
      }
    }
    return false;
  }

  $scope.likeButtonClicked = function(product) {
    if ($scope.mikeLikesIt(product)) {
      // Remove $scope.shopperEmail from the likes Object
      alert('TODO: we sshill need to remove this like');
    } else {
      // Add $scope.shopperEmail to the likes Object
      alert('TODO: We still need to add this like');
    }
  }

});
