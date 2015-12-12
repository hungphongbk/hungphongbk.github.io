// Generated by CoffeeScript 1.10.0
(function() {
  (function(ng, $) {
    var app;
    app = ng.module('app', []);
    app.controller('menuController', [
      '$scope', function($scope) {
        return $scope.list = [
          {
            title: 'Tiramisu dâu tây',
            icon: 'tiramisu-dau-tay.png'
          }, {
            title: 'Mousse sôcôla và bơ',
            icon: 'mousse-socola-bo.png'
          }, {
            title: 'Tart dâu tây',
            icon: 'tart-dau-tay.png'
          }, {
            title: 'Tart kem tươi',
            icon: 'tart-kem-tuoi.png'
          }, {
            title: 'Waffles phúc bồn tử',
            icon: 'waffles-phuc-bon-tu.png'
          }, {
            title: 'Muffin hạnh nhân',
            icon: 'muffin-hanh-nhan.png'
          }, {
            title: 'Macaron sôcôla',
            icon: 'macaron-socola.png'
          }, {
            title: 'Pancake việt quất',
            icon: 'pancake-viet-quat.png'
          }
        ];
      }
    ]);
    app.directive('raty', function() {
      return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
          return $(elem).raty({
            starOn: 'images/star-on.png',
            starOff: 'images/star-off.png'
          });
        }
      };
    });
  })(angular, jQuery);

}).call(this);

//# sourceMappingURL=script.js.map
