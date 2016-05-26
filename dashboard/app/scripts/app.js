//'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */

var app = angular.module('myApp', ['ui.router', 'ngCookies']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '../templates/login.html',
            controller: 'loginCtrl'
        })
        .state('root', {
            url: '/root',
            templateUrl: '../templates/root.html'
            //controller: ''
        })
        .state('root.overview',{
            url: '/overview',
            templateUrl: '../templates/overview.html'
        })
        .state('root.work', {
            url: '/work',
            templateUrl: '../templates/work.html'
        })
        .state('root.producer', {
            url: '/producer',
            templateUrl: '../templates/producer.html'
        })
        .state('root.contact', {
            url: '/contact',
            templateUrl: '../templates/contact.html'
        })
});