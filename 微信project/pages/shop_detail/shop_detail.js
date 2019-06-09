// pages/shop_detail/shop_detail.js
import { IndexModel } from '../../models/index.js'
let indexmodel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: [],
    title: '',
    id: '',
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    indexmodel.getDetail(options.index,(res)=>{
      let detailList = res.data
      this.setData({
        detailList,
        title: res.data[3].name,
        id: res.data[3].idName
      })
    })
  },
  show: function(){
    this.setData({
      isShow: true
    })
  },
  disshow: function(){
    this.setData({
      isShow: false
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