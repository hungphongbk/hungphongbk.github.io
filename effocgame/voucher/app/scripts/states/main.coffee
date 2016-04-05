Phaser  = require 'phaser'

class Main

  dX = 2/5
  dY = 2 - dX
  distX = [dX, dX, 1, dY, dY]
  distY = [dX, dY, 1, dX, dY]

  create : ->

    style = { font: 35*@game.dpr + 'px Arial', fill: '#ff0044', align: 'center' }
    text = @game.add.text @game.world.centerX, @game.world.centerY, "Ready to rock!", style
    text.anchor.set 0.5
    text.alpha = 0.1
    @game.add.tween(text).to( { alpha: 1  }, 5000, "Linear", true )

    @voucher = []
    for i in [0..5]
      @voucher[i] = @game.add.sprite @game.world.centerX, @game.world.centerY, 'voucher'
      @voucher[i].anchor.set 0.5
      @voucher[i].scale.set 1
      @voucher[i].animations.add 'spin'

    @viewVoucher()

  viewVoucher: ->
    tweens = []
    for i in [0..5]
      tweens[i] = @game.add.tween @voucher[i]
      tweens[i].to {x: distX[i] * @game.world.centerX, y: distY[i] * @game.world.centerY}, 400, Phaser.Easing.Bounce.Out
      tweens[i].onComplete.add (obj)->
        obj.play 'spin', 40

      tweens[i - 1].chain(tweens[i]) if i > 0
    tweens[0].start()





module.exports = Main
