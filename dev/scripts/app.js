//app config
  var app = angular.module('myApp',[
    'ui.router'
  ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider

.state('inputs', {
  url: "/",
  templateUrl: "components/views/inputs/inputs.html",
  controller: "inputsController"
}) //do not add a ;

.state('view1', {
  url: "/view1",
  templateUrl: "components/views/view1/view1.html",
  controller: "view1Controller"
})  //do not add a ;

.state('view2', {
  url: "/view2",
  templateUrl: "components/views/view2/view2.html",
  controller: "view2Controller"
})  //do not add a ;

;
}]);

app.factory('message', function() {
  return {
        body : "This is the default message",
        tag : ["#hello", "#angular"]
  };
});

app.controller('inputsController',['$scope', 'message', function($scope, message) {
    $scope.inputMessage = message;
}]);

app.controller('view1Controller',['$scope', 'message', function($scope, message) {
  $scope.viewHeading = "one";
  $scope.message = message;
}]);

app.controller('view2Controller',['$scope', 'message', function($scope, message) {
  $scope.viewHeading = "two";
  $scope.message = message;
}]);
