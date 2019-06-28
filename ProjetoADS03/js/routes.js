angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.cardPioDoDia', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/cardPioDoDia.html',
        controller: 'cardPioDoDiaCtrl'
      }
    }
  })

  .state('tabsController.buscar', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/buscar.html',
        controller: 'buscarCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page4')


});