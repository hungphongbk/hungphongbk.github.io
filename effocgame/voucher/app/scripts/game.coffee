Phaser  = require 'phaser'
Boot    = require './states/boot'
Preload = require './states/preload'
Main    = require './states/main'

Facebook= new (require './facebook')('662347747238324')

class Game extends Phaser.Game

  constructor : (width, height, @dpr)->
    super width, height, Phaser.AUTO, 'game-content', null, true

    @fb = Facebook

    @state.add 'boot', Boot
    @state.add 'preload', Preload
    @state.add 'main', Main

    @state.start 'boot'


window.onload = ->

  dpr = window.devicePixelRatio || 1
  @mobileWeb = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent)
  game = new Game(
    if @mobileWeb then window.innerWidth * dpr else 800,
    if @mobileWeb then window.innerHeight * dpr else 600,
    dpr)
