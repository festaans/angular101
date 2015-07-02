app.controller('stephanusController',['$scope', 'loadUser', 'loadArticles', function($scope, loadUser, loadArticles) {
  $scope.user = "";
  $scope.articles = "";
  loadUser.success(function(data) {
      $scope.user = data.user;
  });
  loadArticles.success(function(data) {
      $scope.articles = data.articles;
  });
}]);
