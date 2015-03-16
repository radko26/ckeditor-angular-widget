define(
  [
    'angular'
  ],
  function(angular) {
    'use strict';
    angular
      .module('todoApp.table-controller', [])
      .controller('TableController', TableDirectiveController);

    function TableDirectiveController($scope) {

      var content = [];

      content.push({
        title: 'Demo widget'
      });
      content.push({
        title: 'Give it a try!'
      });

      $scope.content = content;

    }

    TableDirectiveController.$inject = ['$scope'];



  });