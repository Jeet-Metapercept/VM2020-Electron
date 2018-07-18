angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'scripts/templates/main.html',
            controller: 'mainController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'scripts/templates/login.html',
            controller: 'loginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'scripts/templates/signup.html',
            controller: 'signupController'
        })

    $urlRouterProvider.otherwise('/login')
}]);
