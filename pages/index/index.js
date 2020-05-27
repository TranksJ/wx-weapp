const app = getApp()
Page({
  data: {
    productList:{
      mask:{
        imageUrl:"../../static/mask/1.jpg",
        name:"口罩"
      },
      neck:{
        imageUrl:"../../static/neck/1.jpg",
        name:"肩颈"
      },
      kneepad:{
        imageUrl:"../../static/kneepad/1.jpg",
        name:"护膝"
      },
      waist:{
        imageUrl:"../../static/waist/1.jpg",
        name:"护腰"
      }
    }
  },
  listTap(e){
    let id=e.currentTarget.dataset.index
    console.log(id)
    wx.navigateTo({
      url: '../details/details?id='+id
    })
  },
  onLoad: function () {
    
  }
})
