// component/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:{
      type: Boolean
    },
    count:{
      type: Number,
      observer: function(newVal, oldVal, changPath){
        // 外部数据更新时自动调用，不可改变数据type类型
        let val = newVal > 1000 ? parseInt(newVal/1000) + 'k':newVal
        this.setData({
          _count: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disImg: '../images-cmp/icon-dislike.png',
    likeImg: '../images-cmp/icon-like.png',
    _count: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event){
      let isLike = !this.properties.isLike
      let count = this.properties.count
      count = isLike ? (count + 1) : (count - 1)
      count = parseInt(count/1000)
      this.setData({
        isLike: isLike,
        _count: count + 'k'
      })

      // 激活自定义事件
      let behavior = this.properties.isLike?'like' : 'cancel';
      this.triggerEvent('like',{
        behavior
      },{})
    }
  }

})
