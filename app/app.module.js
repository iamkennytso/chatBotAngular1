'use strict';

angular
  .module('pokeWeakApp', [
    'ngMaterial', 
    'ui.router',
    // is there a better place to put this?
    'ngMessages',
  ])
  // routes
  .config(function($stateProvider, $urlRouterProvider) {

    const helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
    const aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
    const userState = {
      name: 'user',
      url: '/user',
      component: 'user'
    }
    const weaknessState = {
      name: 'weakness',
      url: '/',
      component: 'messageContainer'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(weaknessState);
    $stateProvider.state(userState);

    // default fallback
    $urlRouterProvider.otherwise('/');
  })