var app = angular.module('TodoApp', ['ngCookies']);

  app.controller('TodoCtrl', ['$scope','$http', '$cookies', function($scope, $http, $cookies) {
    $http.get("http://localhost:4567/todo")
      .then(function(response) {
        $scope.data = response.data;
      });

  $scope.submit = function(){
    if($scope.todotext){
      $http.post("http://localhost:4567/todo",null, {params: {"todotext": $scope.todotext}})
        .then(function(response) {
	  $scope.todotext = "";
          $scope.message = response.data;
          $http.get("http://localhost:4567/todo")
           .then(function(response) {
             $scope.data = response.data;
           });
        });
    }
  };
 
  $scope.completeTodo = function(id) {
    $http.put("http://localhost:4567/todo",null, {params:{"id": id}})
      .then(function(response) {
        $scope.message = response.data;
          $http.get("http://localhost:4567/todo")
         .then(function(response) {
           $scope.data = response.data;
         });
      });
  };

  $scope.deleteTodo = function(id) {
    $http.delete("http://localhost:4567/todo", {params:{"id": id}})
      .then(function(response) {
        $scope.message = response.data;
          $http.get("http://localhost:4567/todo")
         .then(function(response) {
           $scope.data = response.data;
         });

      });
  };
}]);
