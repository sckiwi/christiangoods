'use strict';

var FIREBASE_BASE_URL = "https://christiangoods.firebaseio.com";

var app = angular.module('christiangoods', ['firebase','ngMaterial']);

app.controller('main', function($scope, $firebaseObject, $firebaseArray) {

  $scope.shopperEmail = "spencergclark@gmail.com";
  $scope.products = {};

  var firebaseRef = new Firebase(FIREBASE_BASE_URL + "/products");
  var firebaseArray = $firebaseArray(firebaseRef);
  $scope.products = firebaseArray;
  // firebaseArray.$bindTo($scope, "products").then(function(){
  //   // run code after the products come back from Firebase
  //   // Nothing to do right now
  // });

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

  $scope.addLike = function(product) {
    var likesArray = $firebaseArray(firebaseRef.child(firebaseArray.$keyAt(product) + '/likes'));
    likesArray.$loaded().then(function() {
      likesArray.$add($scope.shopperEmail);  
    });
  }

  $scope.removeLike = function(product) {
    var likesArray = $firebaseArray(firebaseRef.child(firebaseArray.$keyAt(product) + '/likes'));
    likesArray.$loaded().then(function() {
      for (var i = 0; i<likesArray.length; i++) {
        var j = likesArray.$getRecord(likesArray.$keyAt(i));
        if (j.$value == $scope.shopperEmail) {
          likesArray.$remove(j);
        }
      }
    });
  }

  $scope.likeButtonClicked = function(product) {
    if (!$scope.mikeLikesIt(product)) {
      $scope.addLike(product);
    } else {
      $scope.removeLike(product);
    }
  }

});
