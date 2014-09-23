angular.module( "starter-app")
  .factory("fs", function($window, $http, $q, $timeout, $rootScope) {
    $window.FamilySearch.init({
      client_id: '4RYW-K3M3-SJRL-KGGY-X4PK-5LJB-3L44-K3SJ',
      environment: 'beta',
      redirect_uri: 'http://localhost:9000',
      http_function: $http,
      deferred_function: $q.defer,
      timeout_function: $timeout,
      save_access_token: true,
      auto_expire: true,
      auto_signin: false,
      expire_callback: function() {
        $rootScope.$emit('sessionExpired');
      }
    });
    return $window.FamilySearch;
  });
