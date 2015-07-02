app.controller('keitumetseController',['$scope', 'message','$mdSidenav', function($scope, message,$mdSidenav) {

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };



}]);
