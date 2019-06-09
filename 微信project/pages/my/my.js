// pages/my/my.js
import { IndexModel } from '../../models/index.js'
let indexmodel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    toDetail: false
  },
  // 跳转详情页面
  toDetail(event){
    let index = event.detail.index;
    wx.navigateTo({
      url: '/pages/shop_detail/shop_detail?index=' + index,
    })
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求收藏列表
    indexmodel.getList((res) => {
      this.setData({
        listArr: res.data
      })
    });
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