app.controller('stephanusController',['$scope', 'loadUser', 'loadArticles', function($scope, loadUser, loadArticles) {
  $scope.user = "";
  $scope.articles = "";
  $scope.gridLayout = "active";
  $scope.listLayout = "inactive";
  $scope.articleLayout = "grid";

  loadUser.success(function(data) {
      $scope.user = data.user;
  });
  loadArticles.success(function(data) {
      $scope.articles = data.articles;
  });

  $scope.isFeatured = function(image){
    if (image != "") {
      return "featured";
    }
  };
  $scope.layoutGrid = function() {
    $scope.gridLayout = "active";
    $scope.listLayout = "inactive";
    $scope.articleLayout = "grid";
  };
  $scope.layoutList = function() {
    $scope.gridLayout = "inactive";
    $scope.listLayout = "active";
    $scope.articleLayout = "list";
  };
}]);
