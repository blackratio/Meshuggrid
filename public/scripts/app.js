function strictMode() {
    "use strict";
    return true;
}

var services = angular.module('services', []);
var controllers = angular.module('controllers', []);
var directives = angular.module('directives', []);
var ngStorage = angular.module('ngStorage', []);
var lodash = angular.module('lodash', []);

var Meshuggrid = angular.module('Meshuggrid', [
   'services',
   'controllers',
   'directives',
   'ui.router',
   'lodash',
   'ngStorage'
]);


Meshuggrid.config(['$stateProvider', '$provide', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider',
function ($stateProvider, $provide, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {
"use strict";
   // Pour toute route inapproprié
   $urlRouterProvider.otherwise('/');

   // Active le mode HTML5, pas de # dans l'URL
   //$locationProvider.html5Mode(true);

   //$httpProvider.interceptors.push('interceptor');

   // Token interceptor
   //$httpProvider.interceptors.push('TokenInterceptor');


   // Enable/disable Angular Debug Mod
   $compileProvider.debugInfoEnabled(true);


   //////////////////////////////////////////////////////////////////////////////////////////////

   /// GESTION DES ROUTAGES

   // -> Un state correspond à une route et/ou vue
   // -> data : titre de la page

   //////////////////////////////////////////////////////////////////////////////////////////////



   $stateProvider


   /////////////////////////////////////////////////////////////

   //	HOMEPAGE

   /////////////////////////////////////////////////////////////

   .state('home', {
      url: '/',
      views: {
         'main_content': {
            templateUrl: 'partials/index.html',
            controller: 'homeCtrl'
         }
      },
      data : {
         mainSection: 'framework',
         pageTitle: 'Welcome - Meshuggrid',
         section: 'home'
      }
   });

}]);


Meshuggrid.run(['$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {

   $rootScope.$state = $state;
   $rootScope.$stateParams = $stateParams;

}]);
