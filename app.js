//app.js
App({
  onLaunch: function () {
    this.globalData={
      name: '',
      phone: '',
      region: '',
      address: '请输入收货信息',
      //购物车
      cart:{
        
      },
      menu:{
        mask:{
            name:"口罩",
            id:"mask",
            price:10,
            swiper:['../../static/mask/1.jpg', '../../static/mask/2.jpg', '../../static/mask/3.jpg'],
            list:['../../static/mask/4.jpg', '../../static/mask/5.jpg', '../../static/mask/6.jpg','../../static/mask/7.jpg','../../static/mask/8.jpg']
        },
        neck:{
            name:"肩颈",
            id:"neck",
            price:"69",
            swiper:['../../static/neck/1.jpg', '../../static/neck/2.jpg', '../../static/neck/3.jpg'],
            list:['../../static/neck/4.jpg', '../../static/neck/5.jpg', '../../static/neck/6.jpg','../../static/neck/7.jpg','../../static/neck/8.jpg'],
        },
        kneepad:{
            name:"护膝",
            id:"kneepad",
            price:"79",
            swiper:['../../static/kneepad/1.jpg', '../../static/kneepad/2.jpg', '../../static/kneepad/3.jpg'],
            list:['../../static/kneepad/4.jpg', '../../static/kneepad/5.jpg', '../../static/kneepad/6.jpg','../../static/kneepad/7.jpg','../../static/kneepad/8.jpg']
        },
        waist:{
            name:"护腰",
            id:"waist",
            price:"89",
            swiper:['../../static/waist/1.jpg', '../../static/waist/2.jpg', '../../static/waist/3.jpg'],
            list:['../../static/waist/4.jpg', '../../static/waist/5.jpg', '../../static/waist/6.jpg','../../static/waist/7.jpg','../../static/waist/8.jpg'],
        }
    }
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})