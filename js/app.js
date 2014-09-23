angular.module( "starter-app", [ "ionic" ])
  .config(function($urlRouterProvider) {
    console.log('config urlRouterProvider');
    $urlRouterProvider.otherwise('/login');
  })
  .run(function($ionicPlatform) {
    console.log('run');
    $ionicPlatform.ready(function() {
      console.log('ready');
      // hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    })
  });
