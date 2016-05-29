angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.kotonaattori', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/kotonaattori.html',
        controller: 'kotonaattoriCtrl'
      }
    }
  })

  .state('tabsController.fakta', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/fakta.html',
        controller: 'faktaCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.kYtNnT'
      2) Using $state.go programatically:
        $state.go('tabsController.kYtNnT');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.kYtNnT', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/kYtNnT.html',
        controller: 'kYtNnTCtrl'
      },
      'tab3': {
        templateUrl: 'templates/kYtNnT.html',
        controller: 'kYtNnTCtrl'
      }
    }
  })

  .state('tabsController.suomalaisuus', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/suomalaisuus.html',
        controller: 'suomalaisuusCtrl'
      }
    }
  })

  .state('tabsController.kieli', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/kieli.html',
        controller: 'kieliCtrl'
      }
    }
  })

  .state('turvapaikkahakemus', {
    url: '/page7',
    templateUrl: 'templates/turvapaikkahakemus.html',
    controller: 'turvapaikkahakemusCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tehtV'
      2) Using $state.go programatically:
        $state.go('tabsController.tehtV');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/kaytannot-tehtava
      /page1/tab3/kaytannot-tehtava
  */
  .state('tabsController.tehtV', {
    url: '/kaytannot-tehtava',
    views: {
      'tab1': {
        templateUrl: 'templates/tehtV.html',
        controller: 'tehtVCtrl'
      },
      'tab3': {
        templateUrl: 'templates/tehtV.html',
        controller: 'tehtVCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});