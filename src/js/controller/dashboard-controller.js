define(
  [
    'angular',
    'js/directive/table-directive'
  ],
  function(angular) {
    'use strict';

    angular
      .module('todoApp.dashboard-controller', ['todoApp.table-directive'])
      .controller('DashboardController', [
        '$scope',
        '$state',
        '$compile',
        '$q',
        '$timeout',

        function($scope, $state, $compile, $q, $timeout) {
          CKEDITOR.config.contentsCss = ['lib/bootstrap/dist/css/bootstrap.css'];
          CKEDITOR.replace('ckEditorArea', {
            allowedContent: true,
            extraPlugins: 'gridPlugin,magicline,grid',
            toolbar: [
              ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Paste'],
              ['NumberedList', 'BulletedList', 'Copy', 'Link', 'Unlink'],
              ['gridPlugin', 'grid']
            ]
          });

          var instance = CKEDITOR.instances.ckEditorArea;

          document.addEventListener('compile-widget', function(event) {
            var details = event.detail;

            var table = angular.element(document.createElement(details.directive));
            var el;

            $timeout(function() {
              el = $compile(table)($scope)
            }).then(function() {

              $timeout(function() {
                var compiledHtml = '';
                for (var i = 0; i < el.length; i++) {
                  compiledHtml += el[i].outerHTML;
                }

                details.editor.insertHtml(compiledHtml);

              });
            });


          });

          //init widgets and angular directives
          var directiveMap = {};

          directiveMap['grid-widget'] = 'table-directive';

          instance.on('afterCommandExec', handleAfterCommandExec);

          function handleAfterCommandExec(event) {

            var command = event.data.name;

            if (command.indexOf('widget') > -1) {
              var dispatchedEvent = new CustomEvent('compile-widget', {
                detail: {
                  editor: instance,
                  directive: directiveMap[command]
                }
              });
              document.dispatchEvent(dispatchedEvent);
            }
          };



        }
      ]);
  });