import {HTTP} from '../util/http.js'

// 获取列表数据moudel类
class IndexModel extends HTTP{
   getList(sCallBack){
     this.request({
       url: 'shop',
       success: (res) => {
         sCallBack(res);
       }
     })
   }

  getPage(index, sCallBack) {
    let url = 'page';
    this.request({
      url: url,
      method: 'POST',
      data: {
        "index": index
      },
      success: (res) =>{
        sCallBack(res);
      }
    })
  }

  getDetail(index, sCallback){
    let url = 'detail';
    this.request({
      url,
      method: 'POST',
      data:{
        index
      },
      success:(res)=>{
        sCallback(res);
      }
    })
  }

  getSearch(item, sCallback){
    let url = 'search';
    this.request({
      url,
      method: 'POST',
      data:{
        item
      },
      success:(res)=>{
        sCallback(res);
      }
    })
  }
}

export { IndexModel }