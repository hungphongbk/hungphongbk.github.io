Phaser  = require 'phaser'
$ = require 'jquery'

shuffle = (arr) ->
  for i in [arr.length-1..1]
    j = Math.floor Math.random() * (i + 1)
    [arr[i], arr[j]] = [arr[j], arr[i]]
  arr

distance = (x1, y1, x2, y2) ->
  Math.sqrt ((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))

class Main

  distX = []
  distY = []
  voucherSpeed = 40
  moveSpeed = 1
  number_of_vouchers = 5
  spScale = 0

  create : ->
    spScale = ((@game.width/3)/@game.voucherInfo.size)/1.1;
    distX = [2/3, 4/3, 1/3, 1, 5/3]
    distHeight = 2/3 * 1.1;
    distY = [distHeight, distHeight, 2-distHeight, 2-distHeight, 2-distHeight]

    @voucher = []
    indexes = shuffle([0,0,0,1,1])
    for i in [0..number_of_vouchers-1]
      @voucher[i] = @game.add.sprite @game.world.centerX, @game.world.centerY, (if indexes[i]==1 then 'voucher' else 'voucher-fail')
      @voucher[i].anchor.set 0.5
      @voucher[i].scale.set spScale
      @voucher[i].animations.add 'spin', [0..@game.voucherInfo.frames]
      @voucher[i].animations.add 'spin-reverse', [@game.voucherInfo.frames..0]
      @voucher[i].wonValue = indexes[i]

    console.log @voucher[0].width, @game.width
    @viewVoucher()
    @getWonStatus().then (won)=>
      @userWon = (won == 'true')


  getWonStatus: ->
    d = $.Deferred()
    $.ajax
      type: 'GET'
      url: "https://hungphongbk.herokuapp.com/game/effoc-voucher-0/public/user/won/#{@game.fb.userInfo.id}"
      success: (response)->
        d.resolve response.won

    d.promise()

  viewVoucher: ->
    tweens = []
    indexes = shuffle([0..number_of_vouchers-1])
    first_tween = null
    last_tween = null

    x0 = @game.world.centerX
    y0 = @game.world.centerY

    for i in indexes
      tweens[i] = @game.add.tween @voucher[i]

      x = x0*distX[i]
      y = y0*distY[i]

      tweens[i].to {x: x, y: y}, distance(x,y,x0,y0)*moveSpeed, Phaser.Easing.Bounce.Out
      tweens[i].onComplete.add (obj)->
        obj.play 'spin', voucherSpeed

      last_tween.chain(tweens[i]) if last_tween?
      last_tween = tweens[i]
      first_tween = tweens[i] if !(first_tween?)
    first_tween.delay 1000
    last_tween.onComplete.add =>
      @game.time.events.add 1000, =>
        # @collapseVoucher()
        @splashVoucher()
    first_tween.start()

  splashVoucher: ->
    tweens = []
    indexes = shuffle([0..number_of_vouchers-1])
    first_tween = null
    last_tween = null

    initScale = @voucher[0].scale.x
    splashZoom = 1.15;

    for i in indexes
      tweens[i] = @game.add.tween @voucher[i].scale
      tweens[i].to {x: initScale*splashZoom, y: initScale*splashZoom}, 100, Phaser.Easing.Quadratic.In
      .to {x: initScale, y: initScale}, 100, Phaser.Easing.Quadratic.Out

      last_tween.chain(tweens[i]) if last_tween?
      last_tween = tweens[i]
      first_tween = tweens[i] if !(first_tween?)
    first_tween.delay 200
    last_tween.onComplete.add =>
      @game.time.events.add 1000, =>
        @collapseVoucher()
    first_tween.start()

  collapseVoucher: ->
    tweens = []
    indexes = shuffle([0..number_of_vouchers-1])
    console.log indexes
    first_tween = null
    last_tween = null

    x0 = @game.world.centerX
    y0 = @game.world.centerY

    for i in [0..number_of_vouchers-1]
      @voucher[i].play 'spin-reverse', voucherSpeed

    for i in indexes
      tweens[i] = @game.add.tween @voucher[i]

      x = x0*distX[i]
      y = y0*distY[i]

      tweens[i].to {x: x0, y: y0}, distance(x,y,x0,y0)*moveSpeed, Phaser.Easing.Linear.None

      last_tween.chain(tweens[i]) if last_tween?
      last_tween = tweens[i]
      first_tween = tweens[i] if !(first_tween?)

    first_tween.delay 500
    last_tween.onComplete.add =>
      @game.time.events.add 200, =>
        @showVoucher()

    first_tween.start()

  showVoucher: ->
    tweens = []
    for i in [0..number_of_vouchers-1]
      tweens[i] = @game.add.tween @voucher[i]
      tweens[i].to {x: distX[i] * @game.world.centerX, y: distY[i] * @game.world.centerY}, 100, Phaser.Easing.Bounce.Out
      tweens[i - 1].chain(tweens[i]) if i > 0
    tweens[4].onComplete.add =>
      @allowClickToVouchers()
    tweens[0].start()

  allowClickToVouchers: ->
    for i in [0..number_of_vouchers-1]
      @voucher[i].inputEnabled = true
      @voucher[i].input.useHandCursor = true
      @voucher[i].events.onInputDown.add @whenClickToVoucher, @

  disableClickAndShowVoucher: (sprite)->
    if @userWon
      console.log 'xui cho ban, ban da thang o lan truoc roi'
    if sprite.wonValue and !@userWon
      $.ajax
        type: 'POST'
        url: "https://hungphongbk.herokuapp.com/game/effoc-voucher-0/public/user/won/#{@game.fb.userInfo.id}"
    else if sprite.wonValue and @userWon
      for i in [0..number_of_vouchers-1]
        if @voucher[i].wonValue==0 and (@voucher[i]!=sprite)
          [@voucher[i], sprite] = [sprite, @voucher[i]]
          break

    for i in [0..number_of_vouchers-1]
      @voucher[i].inputEnabled = false
      @voucher[i].input.useHandCursor = false
      if @voucher[i]!=sprite
        @game.add.tween @voucher[i]
          .to {alpha: 0.3}, 200, Phaser.Easing.Linear.None
          .start()
      else
        sprite.play 'spin'
        @game.world.bringToTop @voucher[i]
        originScale = @voucher[i].scale.x
        originX = @voucher[i].x
        originY = @voucher[i].y
        console.log originX, originY
        @game.add.tween @voucher[i].scale
          .to {x: originScale*1.5, y: originScale*1.5}, 300, Phaser.Easing.Quadratic.In
          .delay 300
          .start()
        @game.add.tween @voucher[i]
          .to {x: @game.world.centerX, y: @game.world.centerY}, 300, Phaser.Easing.Quadratic.In
          .delay 300
          .start()

        @game.time.events.add 2000, (winVoucher, _originX, _originY)->
          @collapseWinVoucherAndShow winVoucher, _originX, _originY
        ,@,@voucher[i], originX, originY

  collapseWinVoucherAndShow: (winVoucher, initX, initY)->
    console.log initX, initY
    @game.add.tween winVoucher.scale
      .to {x: spScale, y: spScale}, 200, Phaser.Easing.Quadratic.In
      .start()
    @game.add.tween winVoucher
      .to {alpha: 0.3}, 200, Phaser.Easing.Linear.None
      .start()
    tween = @game.add.tween winVoucher
      .to {x: initX, y: initY}, 200, Phaser.Easing.Quadratic.In
    tween.onComplete.add ->
      winVoucher.play 'spin-reverse'
      if winVoucher.wonValue == 1
        $('#win').fadeIn 500
    tween.start()

  whenClickToVoucher: (sprite)->
    @disableClickAndShowVoucher sprite


module.exports = Main
