'use strict';
angular.module('gozztrip').controller('IndexCtrl',
['$rootScope','$scope','Api','ENV', function($rootScope,$scope,Api,ENV) {
  $scope.ENV=ENV;
  $scope.page = 0;
  Api.getDList({page:$scope.page}).success(function(data) {
    $scope.dlist = data;
  });
  $scope.dMoreCon = "加载更多";
  $scope.dMore = function(){
   Api.getDList({page:++$scope.page}).success(function(data) {
    if (data != "null") {
      $scope.dlist = $scope.dlist.concat(data);
    }else {
      $scope.dMoreCon = "加载完成";
    }
   });
  }
}]);
