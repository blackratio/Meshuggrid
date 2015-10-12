services.factory('userServices', ['$http', '$q', '$rootScope', '$timeout', '$stateParams', '$location', '$interval', '$window', '$sessionStorage',
function ($http, $q, $rootScope, $timeout, $stateParams, $location, $interval, $window, $sessionStorage){

   return {

      verifUser: function() {
         var deferred = $q.defer();

         var url = 'https://localhost:8080/authenticate';

         $http({
            url: url,
            method: "POST",
            data: {
               'name' : 'David Wieczorek',
               'password': 'slipknot6'
            }
         })
         .success(function(data){
            deferred.resolve(data);
            $sessionStorage.token = data.token;
         })
         .error(function() { // optional
            deferred.reject();
         });
         return deferred.promise;

      },


      getUsers: function() {
         var deferred = $q.defer();

         var url = 'https://localhost:8080/users';

         $http.get(url)
         .success(function(data){
            deferred.resolve(data);
         })
         .error(function(){
            deferred.reject();
         });
         return deferred.promise;

      }

   };

}]);


services.factory('TokenInterceptor', [
  "$q", '$rootScope', '$injector', '$sessionStorage', function($q, $rootScope, $injector, $sessionStorage) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        //var AuthService = $injector.get('userServices');
        //console.log(AuthService.verifUser);
        var token = $sessionStorage.token;
        config.headers['x-access-token'] = token; // add your token from your service or whatever
        return config;
      },
      response: function(response) {
        return response || $q.when(response);
      },
      responseError: function(rejection) {

      }
    };
  }
]);
