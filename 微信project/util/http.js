import {config} from '../config.js'

// 封装的api请求类
class HTTP{
  request(params){
    if (!params.method){
      params.method = "GET"
    }
    // 微信请求方法
    wx.request({
      url: config.shopUrl + params.url,
      method: params.method,
      data: params.data,
      success:(res)=>{
        let code = res.statusCode.toString()
        // 判断状态码是否以2开始
        if(code.startsWith('2')){
          params.success && params.success(res)
        }
        else{
          // 异常处理
          wx.showToast({
            title: '错误',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail:(err)=>{
        // 异常处理
        wx.showToast({
          title: '错误',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
}
export { HTTP }