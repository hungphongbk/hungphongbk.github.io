class Boot
  init: ->
    if (!@game.device.desktop)
      @scale.setMinMax(480, 260, 1024, 768)
      @scale.forceLandscape = true
      @scale.pageAlignHorizontally = true

  preload: ->
    @game.load.image 'preloader', 'assets/images/preloader.gif'


  create: ->
    @game.stage.backgroundColor = 0x004D40
    @scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    @game.state.start 'preload'


module.exports = Boot
