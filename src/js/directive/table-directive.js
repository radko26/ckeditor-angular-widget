define(
  [
    'angular',
    'js/controller/table-controller'
  ],
  function(angular) {
    'use strict';

    angular
      .module('todoApp.table-directive', ['todoApp.table-controller'])
      .directive('tableDirective', [tableDirective]);

    function tableDirective() {
      var directive = {
        controller: 'TableController',
        // templateUrl: 'template/tableDirective.html',

        template: '<div class="widget">\
                     <div style = "border:1px solid red;">\
                       <div style = "border:1px solid black;" ng-repeat = "obj in content" >\
                         <p>{{ obj.title }}</p>\
                       </div>\
                      </div>\
                   </div>',

      };
      return directive;
    }
  }
);