// pages/near/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
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