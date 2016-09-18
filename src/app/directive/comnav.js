/**
 * ndComnav Directives
 */
'use strict';
angular.module('gozztrip').directive('ndComnav', [
  function () {
    return {
      restrict: 'E',
      templateUrl: '/Public/app/templates/comnav.html',
      link: function (scope, element) {
        scope.user = {};
      }
    }
  }
]);