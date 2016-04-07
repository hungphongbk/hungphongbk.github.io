class Preload

  preload: ->

    loadingBar = @add.sprite @game.world.centerX, @game.world.centerY, 'preloader'
    loadingBar.anchor.setTo 0.5, 0.5
    @load.setPreloadSprite loadingBar

    @game.voucherInfo =
      size: 300
      frames: 12

    @game.load.spritesheet 'voucher', 'assets/sprites/voucher.png', @game.voucherInfo.size, @game.voucherInfo.size, @game.voucherInfo.frames
    @game.load.spritesheet 'voucher-fail', 'assets/sprites/voucher-fail.png', @game.voucherInfo.size, @game.voucherInfo.size, @game.voucherInfo.frames


  create: ->

    @game.state.start 'main'


module.exports = Preload
