class Preload

  preload: ->

    loadingBar = @add.sprite 320, 240, 'preloader'
    loadingBar.anchor.setTo 0.5, 0.5
    @load.setPreloadSprite loadingBar
    
    @game.load.spritesheet 'voucher', 'assets/sprites/voucher.png', 600, 600, 8


  create: ->

    @game.state.start 'main'


module.exports = Preload
