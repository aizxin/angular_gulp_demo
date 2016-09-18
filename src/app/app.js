angular.module('gozztrip', ['ngRoute','ngResource'])
.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
  'use strict';
  // 设置post时使用urlencode编码方式;
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  // 设置x-requested-with 请求头, 宁服务器端判定为ajax请求;
  $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  // 请求时判断数据是否为object或数组， 如果是则将对象序列化；
  $httpProvider.defaults.transformRequest = function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? jQuery.param(data) : data;
  };
  $routeProvider
    .when('/login', {
      templateUrl: '/Public/app/templates/login.html',
      controller: 'LoginCtrl'
    })
    .when('/drive', {
      templateUrl: '/Public/app/templates/drive.html',
      controller: 'DiverCtrl'
    })
    .when('/', {
      templateUrl: '/Public/app/templates/home.html',
      controller: 'IndexCtrl'
    })
}])
.run(['$location','$rootScope','Api', function($location,$rootScope,Api) {
  $location.path('/').replace();
  Api.getConfList().success(function(data) {
    $rootScope.conF = data;
  });
}]);
