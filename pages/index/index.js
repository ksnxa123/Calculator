//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'XA计算器',
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

  },
  toCalc:function(){
    wx.navigateTo({
      url:'../cal/cal'
    })
  },

})
