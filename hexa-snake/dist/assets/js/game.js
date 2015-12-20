(function() {
  (function($, window, phaser, angular) {
    (function() {
      var app;
      app = angular.module('SnakeApp', ['ui.router', 'ngAnimate']);
      return app.config([
        '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
          $stateProvider.state('red', {
            url: '/red',
            templateUrl: 'red.html'
          }).state('green', {
            url: '/green',
            templateUrl: 'green.html'
          }).state('blue', {
            url: '/blue',
            templateUrl: 'blue.html'
          });
          $urlRouterProvider.otherwise('/red');
        }
      ]);
    })();
  })(jQuery, window, Phaser, angular);

}).call(this);
