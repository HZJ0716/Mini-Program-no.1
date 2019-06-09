// component/shoplist/shoplist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listArr: {
      type: Array
    }
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
    toDetail(event){
      let items = event.currentTarget.dataset.items;
      this.triggerEvent('toDetail',{
        items
      },{});
    }
  }
})
