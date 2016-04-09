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

  getUserInfo = (api, callback)->
    api '/me',{ fields: 'name' },(response)=>
      @userInfo.id = response.id
      @userInfo.name = response.name
      callback() if callback?

#      $.ajax
#        type: 'POST'
#        url: 'index.php/u'
#        data: "id=#{response.id}&name=#{encodeURIComponent response.name}"
#        success: (response)=>
#          @isConnected = true
#
#          o = JSON.parse response
#          console.log o
#          @userInfo.phonenumber = o['phonenumber']
#          console.log "UserInfo status : done"
#          callback() if callback?

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
        getUserInfo.call @, FB.api, ()->
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