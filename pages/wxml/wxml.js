// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstName:'Koby',
    lastName:"Byant",
    time: new Date().toLocaleString(),
    isActive: false,
    isShow:true,
    score: 30,
    movies:['daoming', 'chuanqi', 'shenme'],
    price:26.6666
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        time: new Date().toLocaleString()
      })
    },1000)
  },
  handelColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handelShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})