Phaser  = require 'phaser'
Boot    = require './states/boot'
Preload = require './states/preload'
Main    = require './states/main'

class Game extends Phaser.Game

  constructor : (width, height, @dpr)->
    super width, height, Phaser.AUTO, 'game-content'

    @state.add 'boot', Boot
    @state.add 'preload', Preload
    @state.add 'main', Main

    @state.start 'boot'


window.onload = ->

  dpr = window.devicePixelRatio || 1
  game = new Game(window.innerWidth * dpr, window.innerHeight * dpr, dpr)
