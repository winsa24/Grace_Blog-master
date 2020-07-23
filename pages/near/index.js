// pages/near/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    co2:"#979797",
    co3:"#979797",
    co1:"#000000",
    longitude:'',
    latitude:'',
  },
  first_select: function() {
    wx.redirectTo({
      url: '../near/index'
    })
  },

  second_select: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  third_select: function() {
    wx.redirectTo({
      url: '../my/index'
    })
  },
  
  onLoad: function (options) {
    
  },
  onReady:function(){
    this.getLocation();
  },
  onShow:function(){
    this.getLocation();
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: (res)=> {
        const latitude = res.latitude
        const longitude = res.longitude
        this.setData({
          longitude,
          latitude
        })
      }
     })
  },
 
})