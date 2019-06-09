import {HTTP} from '../util/http.js'

class LikeModel extends HTTP{
  like(behavior, artID){
    let url = behavior==='like'?'like':'cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        "art_id": artID
      }
    })
  }
}
export { LikeModel }