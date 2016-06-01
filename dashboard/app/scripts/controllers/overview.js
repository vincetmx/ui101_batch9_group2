
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
var App=angular.module('DashboardApp');
App.controller("overview",function($scope,$cookieStore,$location,$http){
	$http.get("http://localhost:3000/api/profile")
	.success(function(data,status,header,config){
		var user = $cookieStore.get("username");
		if (user == "minh"){
			$scope.nickName = data.profiles[0].nickname;
			$scope.userName = data.profiles[0].username;
			$scope.imgUrl = "../" +data.profiles[0].profileImage;
		}else{
			$scope.nickName = data.profiles[0].nickname;
			$scope.userName = data.profiles[0].username;
			$scope.imgUrl = "../" +data.profiles[0].profileImage;
		}
	}).error(function(data,status,header,config){
		console.log("http get error");
	})
});