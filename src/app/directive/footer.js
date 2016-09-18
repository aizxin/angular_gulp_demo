/**
 * ndFooter Directives
 */
'use strict';
angular.module('gozztrip').directive('ndFooter', ['Api',
  function (Api) {
    return {
      restrict: 'E',
      templateUrl: '/Public/app/templates/foot.html',
      link: function (scope, element) {
        /**
         * 初始化变量
         */
         scope.user = {};
         Api.getCategory().success(function(data) {
          //  console.log(data);
          scope.cate = data;
        });
        $("#erweimaqq").hover(function() {
            $("#erweima").attr("src","/Public/app/img/erweima.png");
            $("#erweima").show();
        },
        function(){
            $("#erweima").hide();
        });
        $("#erweimawx").hover(function() {
            $("#erweima").attr("src","/Public/app/img/erweima.png");
            $("#erweima").show();
        },
        function(){
            $("#erweima").hide();
        });
        $("#erweimawb").hover(function() {
            $("#erweima").attr("src","/Public/app/img/erweima.png");
            $("#erweima").show();
        },
        function(){
            $("#erweima").hide();
        });
      }
    }
  }
]);
