// component/my/list/index.js
import { LikeModel } from '../../../models/like.js'
let likemodel = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义判断是否喜欢函数
    onLike: function (event) {
      let index = event.currentTarget.dataset.index;
      let behavior = event.detail.behavior;
      likemodel.like(behavior, index);
    },
    toDetail(event){
      this.triggerEvent('toDetail', { index: event.currentTarget.dataset.index},{});
    }
  }
})
