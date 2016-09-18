/**
 * ndComnav Directives
 */
'use strict';
angular.module('gozztrip').directive('driveList', [
  function () {
    return {
      restrict: 'E',
      templateUrl: '/Public/app/templates/list.html',
    }
  }
]);