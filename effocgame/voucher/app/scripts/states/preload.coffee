class Preload

  preload: ->

    loadingBar = @add.sprite @game.world.centerX, @game.world.centerY, 'preloader'
    loadingBar.anchor.setTo 0.5, 0.5
    @load.setPreloadSprite loadingBar

    @game.load.spritesheet 'voucher', 'assets/sprites/voucher.png', 250, 250, 8


  create: ->

    @game.state.start 'main'


module.exports = Preload
