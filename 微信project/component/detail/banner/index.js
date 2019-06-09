// component/detail/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgList: Array
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
    show(event){
      this.triggerEvent('show',{},{});
    }
  }
})
