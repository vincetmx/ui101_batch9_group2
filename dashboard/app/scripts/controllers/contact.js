// 'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form

app.controller('contactCtrl',['$scope', '$http',
    function($scope, $http){
        $http({
            method: 'GET',
            url: '/api/location',
        })
            .success(function(data, status, headers, config, statusText){
                $scope.states = data;
            })
            .error(function(){
            alert('$http call fails.');
            });

        $http({
            method: 'GET',
            url: '/api/category',
        })
            .success(function(data, status, headers, config, statusText){
                $scope.queryCategories = data;
                $scope.queryTempCategory = {
                    value: '',
                    title: ''
                }
            })
            .error(function(){
                alert('$http call categry fails.');
            });


        $scope.max = 10;
        $scope.percent = 0;

        $scope.hoveringOver = function(value) {
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.rateLeave = function(){
            $scope.percent = $scope.rate * 10;
        }

        $scope.queryActived = 0;
        $scope.conformActived = 0;

    }
]);