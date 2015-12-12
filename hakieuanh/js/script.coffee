((ng,$)->
  app=ng.module 'app',[]
  app.controller 'menuController',[
    '$scope',
    ($scope)->
      $scope.list = [
          title: 'Tiramisu dâu tây'
          icon: 'tiramisu-dau-tay.png'
        ,
          title: 'Mousse sôcôla và bơ'
          icon: 'mousse-socola-bo.png'
        ,
          title: 'Tart dâu tây'
          icon: 'tart-dau-tay.png'
        ,
          title: 'Tart kem tươi'
          icon: 'tart-kem-tuoi.png'
        ,
          title: 'Waffles phúc bồn tử'
          icon: 'waffles-phuc-bon-tu.png'
        ,
          title: 'Muffin hạnh nhân'
          icon: 'muffin-hanh-nhan.png'
        ,
          title: 'Macaron sôcôla'
          icon: 'macaron-socola.png'
        ,
          title: 'Pancake việt quất'
          icon: 'pancake-viet-quat.png'
        ,
      ]
  ]
  app.directive 'raty',->
    restrict: 'E'
    link:(scope,elem,attrs)->
      $(elem).raty
        starOn: 'images/star-on.png'
        starOff: 'images/star-off.png'
  return
)(angular,jQuery)