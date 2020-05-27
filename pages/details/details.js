const util = require('../../utils/util.js')
var app=getApp();
Page({
  data: {
    name:"",// 商品名称
    id:"",// 商品名称
    swiperList: [],// 顶部轮播图片列表
    indicatorDots: true,// 显示轮播图指示点
    cartshow:false,// 购物车弹出层  显示隐藏
    value:5,// 评价星数
    cartnum:1, //购物车商品数量
    buynum:1, // 立即购买商品数量
    info:0, // 购物车商品数量
    infoShow:false, // 购物车图标显示隐藏
    detailsList: [],// 详情图片列表
    price:null,
    buyshow:false //立即购买弹出层
  },
  // 购物车页面
  onClickIcon:function(){
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
  // 加入购物车
  btn:function(){
    let id=this.data.id
    console.log(id)
    console.log(this.data.swiperList[0])
    if(app.globalData.cart[id]==undefined){
      app.globalData.cart[id]={
        name:this.data.name,
        id:this.data.id,
        num:this.data.cartnum,
        price:this.data.price,
        imageUrl:"../"+this.data.swiperList[0]
      }
    }else{
      app.globalData.cart[id].num= app.globalData.cart[id].num + this.data.cartnum
      console.log(app.globalData.cart[id])
    }
    if(this.getJsonLength(app.globalData.cart)!==0){
      this.setData({
        info:this.getJsonLength(app.globalData.cart),
        infoShow:true
      })
    }
    wx.showToast({
      title:'加入购物车成功'
    })
    this.setData({ cartshow: false });
  },
  // 立即购买
  buy: function () {
    this.setData({
      buyshow: true
    })  
  },
  // 购物车 商品数量加减
  onChange(event) {
    if (event.detail == 0) {
      this.setData({
        cartnum:1
      })
    } else {
      this.setData({
        cartnum: event.detail
      })
    }
  },
  // 立即购买商品数量加减
  onbuyste(){
    if (event.detail == 0) {
      this.setData({
        buynum:1
      })
    } else {
      this.setData({
        buynum: event.detail
      })
    }
  },
  // 隐藏购物车弹出层
  onClose:function(){
    this.setData({ cartshow: false });
  },
  // 显示购物车弹出层
  cart:function(){
    this.setData({
      cartshow: true
    })
  },
  // 隐藏立即购买弹出层
  buyClose:function () {
    this.setData({
      buyshow: false
    })
  },
  // 获取购物车商品数量
  getJsonLength:function(jsonData) {
    var length=0;
    for(var i in jsonData) {
        length++;
    }
    return length;
  },
  onLoad:function(e){
    let id=e.id
    let Swiper=app.globalData.menu[id].swiper // 轮播图列表
    let dList=app.globalData.menu[id].list // 详情图片列表
    let price=app.globalData.menu[id].price // 价格
    let name=app.globalData.menu[id].name
    this.setData({
      id:id,
      swiperList:Swiper,
      detailsList:dList,
      price:price,
      name:name
    })
    if(this.getJsonLength(app.globalData.cart)!==0){
      this.setData({
        info:this.getJsonLength(app.globalData.cart),
        infoShow:true
      })
    }
  }
}) 
