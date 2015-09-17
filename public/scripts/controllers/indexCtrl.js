
controllers.controller('homeCtrl', ['$scope', '$rootScope', '$http', '$timeout',
function ($scope, $rootScope, $http, $timeout) {

   $scope.name = "Daphné";
   $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
   };

}]);

directives.directive('anchorClick', function() {
   return function(scope, element, attrs) {
      $(element).click(function(event) {
         event.preventDefault();
         var target = this.hash;
         var $target = $(target);

         $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
         }, 900);
      });
   };
});

controllers.controller('componentsCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location',
function ($scope, $rootScope, $http, $timeout, $location) {

   $scope.name = "Raphael";
   $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
   };

}]);


controllers.controller('gettingStartCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location',
function ($scope, $rootScope, $http, $timeout, $location) {

   $scope.name = "David";
   $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
   };

}]);


controllers.controller('MyController', ['$scope',
function ($scope) {

   $scope.name = "Sydney";
   $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
   };

}]);
