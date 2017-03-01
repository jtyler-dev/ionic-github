angular.module('starter', ['ionic', 'search.searchpage', 'search.searchResults'])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    $stateProvider
    // setup an abstract state for the tabs directive
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/tabs.html'
    })
    // Each tab has its own nav history stack:
    .state('app.search', {
        url:'/search',
        views: {
            'tab-home': {
                templateUrl:'app/search-page/search-page.html',
                controller: 'SearchPageCtrl'
            }
        }
    })
    .state('app.searchResults', {
        url:'/search/:userId',
        views: {
            'tab-home': {
                templateUrl:'app/search-results/search-results.html',
                controller: 'SearchResultsCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/search');
});
