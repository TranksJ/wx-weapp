// pages/buying/buying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesUrl: ['../../static/kneepad/1.jpg', '../../static/kneepad/2.jpg', '../../static/kneepad/3.jpg'],
    indicatorDots: true,
    //秒杀结束时间
    endDate:'2020-5-30 15:56:56',
    countdown:'',
    d:'',
    h:'',
    m:'',
    s:'',
  },
  onLoad: function (options) {
    //当前时间
    this.countTime()
    
  },
  countTime(){
    var that =this;
    let date = new Date();
    let now = date.getTime();
    //截止时间
    let endDate = new Date(this.data.endDate);
    let end = endDate.getTime();
    //时间差
    let leftTime = end - now
    var d, h, m, s;
    if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
      s = s < 10 ? "0" + s : s
      m = m < 10 ? "0" + m : m
      h = h < 10 ? "0" + h : h
      that.setData({
        d: d ,
        h:h,
        m:m,
        s:s
      })
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(that.countTime, 1000);
    } else {
      console.log('已截止')
      that.setData({
        countdown: '00:00:00'
      })
    }
  },
  //购买口罩
  maskTap: res => {
    wx.navigateTo({
      url: '../mask/logs'
    })
  },
  //购买护膝
  kneepadTap: res => {
    wx.navigateTo({
      url: '../kneepad/kneepad'
    })
  },
  //购买肩颈
  neckTap: res => {
    wx.navigateTo({
      url: '../neck/neck'
    })
  },
  //购买护腰
  waistTap: res => {
    wx.navigateTo({
      url: '../waist/waist'
    })
  }

})