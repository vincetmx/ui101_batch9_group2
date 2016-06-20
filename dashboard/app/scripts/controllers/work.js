//'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

app.controller('workCtrl', ['$scope', '$http', '$filter', '$uibModal',
    function($scope, $http, $filter, $uibModal){

        //
        $http({
            method: 'GET',
            url: '/api/work',
            //data:
        })
        .success(function(data, status, headers, config, statusText) {
            $scope.workFile = data;
        })

        //
        $scope.displayModel = 'card';

        //
        $scope.searchReset = function() {
            $scope.search.title = "";
            $scope.search.like = "";
            $scope.search.comment = "";
            $scope.search.author = "";
        };

        var orderBy = $filter('orderBy');
        $scope.order = function(prediate, reverse) {
            $scope.workFile.works = orderBy($scope.workFile.works, prediate, reverse);
        }


        // open modal
        $scope.workDelete = function ($index) {
            //alert($index);
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'ModalInstanceCtrl',
                size: '',
                keyboard: true,
                templateUrl:'../templates/confirmBox.html',
                resolve: {
                    index: function () {
                        //return $scope.items;
                        return $index;
                    },

                }
            });


            modalInstance.result.then(function ($index) {
                console.log($scope.workFile.works);
                $scope.workFile.works.splice($index, 1);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    }
]);

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, index) {

    //$scope.items = items;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    $scope.ok = function () {
        $uibModalInstance.close('delete a item');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});