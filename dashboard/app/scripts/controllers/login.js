'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
App.controller("loginCtrl",function($scope,$http,$cookieStore,$location){
	var user=function(username,password){
		this.username=username;
		this.password=password;
	}
	$scope.submit=function(){
		var users=new user($scope.username,$scope.password);
	$http.post('http://localhost:3000/api/login',users)
	.success(function(data,status,headers.config){
		if(data.authentication=="success"){
			$cookieStore.put("username",$scope.username);
			$location.path("/root/work");
		}
	}).error(function(data,status,headers,config){
		$scope.errorMsg="Login is not correct,please try again.";
	});
		
	}
})