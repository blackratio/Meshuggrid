
services.factory('userServices', ['$http', '$q', '$rootScope', '$timeout', '$stateParams', '$location', '$interval', '$window',
function ($http, $q, $rootScope, $timeout, $stateParams, $location, $interval, $window){

   return {

      getUsers: function() {
         var deferred = $q.defer();
         var url = 'https://localhost:8080/user';

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
