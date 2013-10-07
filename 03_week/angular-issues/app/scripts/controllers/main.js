'use strict';

angular.module('angularIssuesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.loadIssues = function() {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ':' + $scope.password);
        	$http.get('https://api.github.com/repos/mer8/test_1/issues').success(function(response) {
  		console.log(response);
  		$scope.issues = response;

  		});
    };
  });
