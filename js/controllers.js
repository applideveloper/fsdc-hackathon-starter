angular.module( "starter-app")
  .config(function($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      controller: 'LoginController as login',
      templateUrl: 'templates/login.html'
    });
  })
  .controller('LoginController', function ($state, fs) {
    this.signIn = function(user) {
      fs.getAccessTokenForMobile(user.username, user.password).then(function() {
        $state.go('list');
      });
    };
  })

  .config(function($stateProvider) {
    $stateProvider.state('list', {
      url: '/list',
      controller: 'ListController as list',
      templateUrl: 'templates/list.html',
      resolve: {
        persons: function(fs) {
          return fs.getCurrentUser().then(function(response) {
            var personId = response.getUser().personId;
            return fs.getAncestry(personId, {generations: 3}).then(function(response) {
              return response.getPersons();
            });
          });
        }
      }
    });
  })
  .controller( "ListController", function($scope, persons) {
    this.persons = persons;
  });
