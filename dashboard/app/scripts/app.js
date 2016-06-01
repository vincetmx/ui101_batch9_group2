//'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */
 var App=angular.module('DashboardApp',["ui.router","ngCookies","ngAnimate","ui.bootstrap"]);
 App.config(function($stateProvider,$urlRouterProvider){
 	$stateProvider
 	.state("login",{
 		url:"/login",
 		templateUrl:"../templates/login.html",
 	})
 	.state("root",{
 		url:"/root",
 		templateUrl:"../templates/root.html",
 	})
 	.state("root.overview",{
 		url:"/overview",
 		templateUrl:"../templates/overview.html",
 	})
 	.state("root.work",{
 		url:"/work",
 		templateUrl:"../templates/root.html",
 	})
 	.state("root.producer",{
 		url:"/producer",
 		templateUrl:"../templates/producer.html",
 	})
 	.state("root.contact",{
 		url:"/contact",
 		templateUrl:"../templateUrl/contact.html"
 	})
 	$urlRouterProvider.otherwise("/login")
 });