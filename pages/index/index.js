//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  num1:0,
  num2:0,
  change:function(e){
    this[e.currentTarget.id] = Number(e.detail.value)
    this.num2=Number(e.detail.value)
  },
  change2:function(e){
    // dataset.id 表示触发当前input组件的data-id 属性值 这个值分别为num1 和num2 通过这个来给数据绑定
    this[e.target.dataset.id] = Number(e.detail.value)
  },
  data:{
    result:""
  },
  compare:function(){
    var str = '两数相等'
    if(this.num1>this.num2){
      str = " 第一个数字大"
    }else if(this.num1<this.num2){
      str  = "第二个数字大"
    }
    this.setData({result:str})
  }
})
