Phaser  = require 'phaser'

class Main

  distX = []
  distY = []

  create : ->

    spScale = (if @game.width/250 < 4 then 1 else @game.width/1000)
    dX = (if @game.width/(250 * spScale) < 3 then 1/2 else 1/3)
    dY = (if @game.height/(120 * spScale) < 4 then 1/3 else 2/3)
    distX = [dX, dX, 2-dX, 2-dX, 1]
    distY = [2-dY, dY, 2-dY, dY, 1]

    style = { font: 35*@game.dpr + 'px Arial', fill: '#ff0044', align: 'center' }
    # text = @game.add.text @game.world.centerX, @game.world.centerY, "Ready to rock!", style
    # text.anchor.set 0.5
    # text.alpha = 0.1
    # @game.add.tween(text).to( { alpha: 1  }, 5000, "Linear", true )

    @voucher = []
    for i in [0..5]
      @voucher[i] = @game.add.sprite @game.world.centerX, @game.world.centerY, 'voucher'
      @voucher[i].anchor.set 0.5
      @voucher[i].scale.set spScale
      @voucher[i].animations.add 'spin', [0..8]
      @voucher[i].animations.add 'spin-reverse', [8..0]

    console.log @voucher[0].width, @game.width
    @viewVoucher()

  viewVoucher: ->
    tweens = []
    for i in [0..5]
      tweens[i] = @game.add.tween @voucher[i]
      tweens[i].to {x: distX[i] * @game.world.centerX, y: distY[i] * @game.world.centerY}, (if i == 4 then 200 else 400), Phaser.Easing.Bounce.Out
      tweens[i].onComplete.add (obj)->
        obj.play 'spin', 25

      tweens[i - 1].chain(tweens[i]) if i > 0
    tweens[0].delay 2000
    tweens[4].onComplete.add =>
      @game.time.events.add 2000, =>
        @collapseVoucher()
    tweens[0].start()

  collapseVoucher: ->
    tweens = []

    for i in [0..5]
      @voucher[i].play 'spin-reverse', 25

    for i in [0..4]
      tweens[i] = @game.add.tween @voucher[i]
      tweens[i].to {x: @game.world.centerX, y: @game.world.centerY}, 400, Phaser.Easing.Linear.None

      tweens[i - 1].chain(tweens[i]) if i > 0

    tweens[0].delay 500
    tweens[3].onComplete.add =>
      @game.time.events.add 200, =>
        @showVoucher()

    tweens[0].start()

  showVoucher: ->
    tweens = []
    for i in [0..4]
      tweens[i] = @game.add.tween @voucher[i]
      tweens[i].to {x: distX[i] * @game.world.centerX, y: distY[i] * @game.world.centerY}, 400, Phaser.Easing.Bounce.Out
      tweens[i - 1].chain(tweens[i]) if i > 0
    tweens[3].onComplete.add =>

    tweens[0].start()

module.exports = Main
