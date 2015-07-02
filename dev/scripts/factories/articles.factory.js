app.factory('loadArticles', function($http) {
    return $http.get('data/articles.json');
});
