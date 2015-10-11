//= require_tree .
//= require angular
//= require angular-animate
//= require angular-aria
//= require angular-material
//= require angular-messages
//= require angular-sanitize

angular
  .module('ReadmeApp', ['ngMaterial', 'ngMessages', 'ngSanitize'])
  .controller('DemoCtrl', function ($scope) {
    var _purposeDesc = 'Longer repo purpose here.';
    $scope.doc = {
      title: 'README',
      desc: 'A Middleman site to help generate repo READMEs.',
      purposeHeader: 'What is this?',
      purposeDesc: function (newValue) {
        return arguments.length ? (_purposeDesc = newValue) : _purposeDesc;
      },
      purposeDescHTML: function () {
        return _purposeDesc.replace(/(?:\r\n|\r|\n)/g, '<br />');
      }
    };
  });
