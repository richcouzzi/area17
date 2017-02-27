function config ($urlRouterProvider, $stateProvider, $locationProvider) {

  $stateProvider

    .state('layout', {
      abstract: true,
      templateUrl: 'templates/layouts/layout.html',
      controller: 'MainController as vm'
    })

    .state('layout.feed', {
      url: '/feed',
      templateUrl: 'templates/pages/feed.html',
    })

    .state('layout.accordion', {
      url: '/accordion',
      templateUrl: 'templates/pages/accordion.html'
    })

  $urlRouterProvider.otherwise('/feed');

  if (window.location.href.indexOf('localhost') < 0) {
    $locationProvider.html5Mode(true);
  }

}

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
export { config };
