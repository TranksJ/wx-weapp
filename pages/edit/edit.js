var app = getApp();
Page({
  data: {
    multiIndex: [0, 0, 0],
    region:'请选择',
    customItem: '全部',
    name:'',
    phone:'',
    address:''
  },
  bindPickerChange: function (e) {
    if (e.detail.value[0] == e.detail.value[1]) {
      this.setData({
        region: e.detail.value[1] + e.detail.value[2]
      })
      app.globalData.region = e.detail.value[1] + e.detail.value[2]
    } else {
      this.setData({
        region: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
      })
      app.globalData.region = e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    }
  },
  addressTap: function(e) {
    if (e.detail.value != '') {
      this.setData({
        address:e.detail.value
      })
      app.globalData.address = e.detail.value
    }
  },
  nameTap: function (e)  {
    if (e.detail.value != '') {
      app.globalData.name = e.detail.value
      this.setData({
        name:e.detail.value
      })
    }
  },
  phoneTap: function (e)  {
    if (e.detail.value != '') {
      if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(e.detail.value))) {
        wx.showToast({
          title: '手机号码有误，请重新输入',
          duration: 2000,
          icon: 'none'
        })
      } else {
        this.setData({
          phone : e.detail.value
        })
        app.globalData.phone = e.detail.value

      }
    }
  },
  btnTap:function(){
    if(this.data.name!=''){
      if (this.data.phone!=''){
        if (this.data.region !=='请选择'){
          if (this.data.address!=''){
            wx.navigateTo({
              url: '../settlement/settlement'
            })
          }else{
            wx.showToast({
              title: '请输入详细地址',
              duration: 2000,
              icon: 'none'
            })
          }
        }else{
          wx.showToast({
            title: '请选择地区',
            duration: 2000,
            icon: 'none'
          })
        } 
      }else{
        wx.showToast({
          title: '请输入手机号码',
          duration: 2000,
          icon: 'none'
        })
      }
    }else{
      wx.showToast({
        title: '请输入姓名',
        duration: 2000,
        icon: 'none'
      })
    }
  }


})