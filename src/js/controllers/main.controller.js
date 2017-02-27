function MainController($scope, $http) {

    $http.get('/assets/data/accordion.json').then((res) => {

      $scope.sections = res.data.accordion;

    });

    $http.get('/assets/data/feed.json').then((res) => {

      $scope.feed = res.data.feed;

    });
}

MainController.$inject = ['$scope', '$http'];
export { MainController };
