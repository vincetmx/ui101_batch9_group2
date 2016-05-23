//'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */

var app = angular.module('myApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'templates/login.html',
            css: '../assets/styles/login.css'
            //controller: 'loginCtrl'
        })
        .state('root', {
            url: '/root',
            templateUrl: 'templates/root.html',
            css: '../assets/styles/root.css'
        })
});