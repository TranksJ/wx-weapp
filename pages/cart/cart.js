var app=getApp();
Page({
  data: {
    list:{
      // mask:{
      //   id:'mask',
      //   name:'口罩',
      //   num:3,
      //   price:10,
      //   imageUrl:'/static/mask/1.jpg'
      // },
      // kneepad:{
      //   id:'kneepad',
      //   name:'护膝 ',
      //   num:3,
      //   price:89,
      //   imageUrl:'/static/kneepad/1.jpg'
      // },
      // neck:{
      //   id:'neck',
      //   name:'肩颈',
      //   num:3,
      //   price:99,
      //   imageUrl:'/static/neck/1.jpg'
      // },
      // waist:{
      //   id:'waist',
      //   name:'护腰',
      //   num:3,
      //   price:109,
      //   imageUrl:'/static/waist/1.jpg'
      // }
    },
    result: [],
    value:0,//商品列表
    checked: false,
    total:0,
  },
  //步进器
  onStepper(event) {
    let cdata=this.data.list;
    let id=event.target.dataset.id;
    let res=this.data.result
    let index = res.indexOf(id)
    if(index>=0){
      let diff =(cdata[id].num-event.detail)*cdata[id].price
      diff=diff*100
      var  total=this.data.total-diff
      this.setData({
        total: total,
      })
    }
    cdata[id].num=event.detail//[id]使用id变量的字面量从json里取值
    this.setData({
      list: cdata,
    })
  },
  //选择
  checkbox(event){
    this.setData({
      result: event.detail,
    });
    let result =this.data.result
    let list =this.data.list
    let idList=[]
    for(var i in list){
      idList.push(list[i].id)
    }
    //判断是否全部选中
    if(idList.sort().toString()==result.sort().toString()){
      this.setData({
        checked:true
      })
    }else{
      this.setData({
        checked:false
      })
    }
    //计算价格
    let total=0
    for(var i in result){
      let index=result[i];
      total=total+(list[index].num*list[index].price)
      console.log(total)
    }
    this.setData({
      total:total*100
    })
  },
  //全选
  onRadio(event){
    let res=[];
    if(event.detail){
      for(var i in this.data.list){
        res.push(this.data.list[i].id)
      }
      this.setData({
        checked: event.detail,
        result:res
      });
    }else{
      this.setData({
        checked: event.detail,
        result:res
      });
    }
    //计算价格
    let result =this.data.result
    let list =this.data.list
    let total=0
    for(var i in result){
      let index=result[i];
      total=total+(list[index].num*list[index].price)
      console.log(total)
    }
    this.setData({
      total:total*100
    })
  },
  //结算
  onClickButton(){
    console.log(this.data.result)
  },
  //计算json数据长度
  getJsonLength:function(jsonData) {
    var length=0;
    for(var i in jsonData) {
        length++;
    }
    return length;
  },
  onLoad: function (options) {
    this.setData({
      list:app.globalData.cart
    })
    this.setData({
      value:this.getJsonLength(this.data.list)
    })
  },

})