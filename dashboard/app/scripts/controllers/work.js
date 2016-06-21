//'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

app.controller('workCtrl', ['$scope', '$http', '$filter', '$uibModal', '$log', '$rootScope',
    function($scope, $http, $filter, $uibModal, $log, $rootScope){
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
            var deleteModalInstance = $uibModal.open({
                animation: true,
                controller: 'deleteModalInstanceCtrl',
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
            deleteModalInstance.result.then(function () {
                //console.log($scope.workFile.works);
                $scope.workFile.works.splice($index, 1);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.workEdit = function(work){
            $rootScope.editWork = work;
            var editModalInstance = $uibModal.open({
                animation: true,
                controller: 'editModalInstanceCtrl',
                size: '',
                keyboard: true,
                templateUrl: '../templates/editDialog.html',
                resolve: {

                }
            });
            editModalInstance.result.then(function(){

            }, function(){
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        //console.log($rootScope.editWork);
        //$scope.editWorkImage = $rootScope.editWork.image;
        //$scope.editWorkTitle = $rootScope.editWork.title;
        //$scope.editWorkAuthor = $rootScope.editWork.author;

    }
]);

app.controller('deleteModalInstanceCtrl', function ($scope, $uibModalInstance) {

    //$scope.items = items;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};
    $scope.ok = function () {
        $uibModalInstance.close('delete the th item');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

app.controller('editModalInstanceCtrl', function($scope, $uibModalInstance){
    $scope.editWorkImage = $scope.editWork.image;
    $scope.editWorkTitle = $scope.editWork.title;
    $scope.editWorkAuthor = $scope.editWork.author;

    $scope.submit = function(){
        $scope.editWork.image = $scope.editWorkImage;
        $scope.editWork.title = $scope.editWorkTitle;
        $scope.editWork.author = $scope.editWorkAuthor;

        $uibModalInstance.close('edit the th item');
    };

    $scope.cancel = function(){
        //console.log($rootScope.editWork);
        $uibModalInstance.dismiss('cancel');
    };
});