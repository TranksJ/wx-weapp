var app = getApp();
Page({
  data: {
    uprice:12,
    tprice:12,
    name:'',
    phone:'',
    address:'请输入地址'
  },
  onChange(event) {
    if (event.detail==0){
      this.setData({
        tprice: 12
      })
    }else{
      this.setData({
        tprice: event.detail * this.data.uprice
      })
    }
    console.log(this.data.tprice); 
  },
  onLoad: function (e) {
    console.log(e.id)
    this.setData({
      address: app.globalData.region + app.globalData.address,
      name: app.globalData.name,
      phone: app.globalData.phone
    })
  },
  btn:function(){
    if(this.data.name==''){
      wx.showToast({
        title: '请输入个人信息',
        duration: 2000,
        icon: 'none'
      })
    }
  },
  editbtn:function(){
    wx.navigateTo({
      url: '../edit/edit'
    })
  }
})