class Boot
  init: ->
    if (!@game.device.desktop)
      @game.scale.setMinMax(480, 260, 1024, 768)
      @game.scale.forceLandscape = true
      @game.scale.pageAlignHorizontally = true

  preload: ->
    @game.load.image 'preloader', 'assets/images/preloader.gif'


  create: ->
    @game.stage.backgroundColor = 0x00241E
    @scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    @game.state.start 'preload'


module.exports = Boot
