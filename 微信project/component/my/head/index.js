// component/my/head/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached(event){
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          userInfo: data.userInfo
        })
      }
    });
  }
})
