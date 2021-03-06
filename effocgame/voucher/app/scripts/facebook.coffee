$ = require 'jquery'

class FacebookApi

  ui = null
  api = null
  appId = ''
  accessToken = ''

  constructor: (@appId) ->
    appId = @appId
    @isConnected = false
    @userInfo = {}
    @events =
      connected: null

    @init()

  init: ->
    window.fbAsyncInit = =>
      @initFb()
      return
    @loadAPI()

  loadAPI: ->
    ((d,s,id) ->
      ref = d.getElementsByTagName(s)[0]
      return if d.getElementById id

      js = d.createElement s
      js.id = id
      js.async = true
      js.src = "//connect.facebook.net/en_US/all.js"
      ref.parentNode.insertBefore js, ref
    )(document, 'script', 'facebook-jssdk')

  getUserInfo = (api, userId, callback)->
    api '/me',{ fields: 'name' },(response)=>
      @userInfo.name = response.name
      $('span#name').text @userInfo.name

      $.ajax
        type: 'POST'
        url: "https://hungphongbk.herokuapp.com/game/effoc-voucher-0/public/user/#{userId}"
        data: "name=#{encodeURIComponent response.name}"
        success: (response)=>
          @isConnected = true
          console.log "UserInfo status : done"
          callback() if callback?

  getUserInfoFromServer = (api, userId, success)->
    @userInfo.id = userId
    $.ajax
      type: 'GET'
      url: "https://hungphongbk.herokuapp.com/game/effoc-voucher-0/public/user/#{userId}"
      success: (response)=>
        if response['status']=='OK'
          @isConnected = true
          console.log 'Data get from heroku: succeeded'
          @userInfo.name = response['name']
          $('span#name').text @userInfo.name
          success() if success?
        else
          console.log 'Data get from heroku: failed'
          console.log 'call FB api'
          getUserInfo.call @, api, userId, success

  initFb: =>
    fbConfig =
      appId: @appId
      xfbml: true
      version: 'v2.5'
    FB.init fbConfig

    onLogin = (response) =>
      connectedCallback = @events.connected
      if (response.status == 'connected')
        ui = FB.ui
        api = FB.api

        getUserInfoFromServer.call @, FB.api, response.authResponse.userID, ()->
          connectedCallback() if connectedCallback?

    FB.getLoginStatus (response)->
      console.log "SDK Status : #{response.status}"
      if (response.status=='connected')
        accessToken = response.authResponse.accessToken
        onLogin response
      else
        FB.login (response)->
          onLogin response
        ,{scope : 'user_friends, email'}

module.exports = FacebookApi