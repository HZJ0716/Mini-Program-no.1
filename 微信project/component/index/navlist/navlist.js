// component/index/navlist/navlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    page: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 翻页处理
    onPrev(){
      if (this.properties.page == 10000993){
        wx.showToast({
          title: '这已经最新一页了',
          icon: 'none',
          duration: 2000
        })
      }else{
        this.triggerEvent('Prev', {}, {})
      }
    },
    // 翻页处理
    onNext(){
      if (this.properties.page == 10008296) {
        wx.showToast({
          title: '这已经是最后一个了',
          icon: 'none',
          duration: 2000
        })
      }else{
        this.triggerEvent('Next', {}, {})
      }
    }
  }
})
