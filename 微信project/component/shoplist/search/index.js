// component/shoplist/search/index.js
import { IndexModel} from '../../../models/index.js';
let indexmodel = new IndexModel();
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
    list: [],
    isfinish: false,
    isempty: false,
    p: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 退出搜索状态
    doCancel(){
      this.triggerEvent('cancel', {}, {})
    },
    // 搜索数据
    doSearch(event){
      let p = event.detail.value;
      if(!p){
        this.setData({
          isfinish: false
        })
      }
      this.setData({
        p:p,
        isfinish: true
      })

      indexmodel.getSearch(p, (res)=>{
        console.log(res.data.length);
        if(res.data.length){
          this.setData({
            list: res.data,
            isempty: false
          })
        }else{
          this.setData({
            isempty: true
          })
        }
      })

      if(p == ''){
        this.setData({
          isfinish: false
        })
      }
    },
    // 清空查询数据
    doDel(event){
      this.setData({
        p:'',
        isfinish: false,
        isempty: false
      })
    },
    // 跳转详情
    toDeatail(event){
      let index = event.currentTarget.dataset.index;
      this.triggerEvent('jpDetail',{index},{});
    }
  }
})
