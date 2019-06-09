//index.js
//获取应用实例
import { IndexModel } from '../../models/index.js'
import { LikeModel } from '../../models/like.js'
let indexmodel = new IndexModel()
let likemodel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    page: 0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 首次访问获取商品信息
    indexmodel.getList((res)=>{
      this.setData({
        listArr: res.data[0]
      })
    });
  },
  // 自定义判断是否喜欢函数
  onLike: function (event) {
    let behavior = event.detail.behavior;
    likemodel.like(behavior, this.data.listArr.itemsId);
  },
  // 上一页处理
  onPrev: function(event){
    let page = this.data.page -1;
    indexmodel.getPage(page, (res)=>{
      this.setData({
        page: page,
        listArr: res.data[0]
      })
    })
  },
  // 下一页处理
  onNext: function (event) {
    let page = this.data.page + 1;
    indexmodel.getPage(page, (res) => {
      this.setData({
        page: page,
        listArr: res.data[0]
      })
    })
  },
  // 跳转到详情页
  toDetail: function(){
    wx.navigateTo({
      url: '/pages/shop_detail/shop_detail?index=' + this.data.listArr.itemsId,
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
