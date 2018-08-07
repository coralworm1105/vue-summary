import axios from 'axios'
import qs from 'qs'
import { Message, Loading, MessageBox } from 'element-ui'
import router from '../router'
const wechatAppId = process.env.WX_APPID
const Axios = axios.create({
  baseURL: '/', // 因为我本地做了反向代理
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})
let otherConfig = {
  fullscreen: false,
  loadingTxt: '加载中...'
}
let loading = null
let hideError = false
// POST传参序列化(添加请求拦截器)

Axios.interceptors.request.use(
  config => {
    if (config.other) {
      otherConfig = Object.assign(otherConfig, config.other)
    }
    // 在发送请求之前做某件事
    if (config.url.indexOf('/wx') !== -1) {
      if (config.method === 'get') {
        config.params = config.params || {}
        config.params.wechatAppId = config.params.wechatAppId || wechatAppId
      } else {
        config.data = config.data || {}
        config.data.wechatAppId = config.data.wechatAppId || wechatAppId
      }
    }
    if (
      (config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete') && (config.contentType !== 'application/json')
    ) {
      // 序列化
      config.data = qs.stringify(config.data || {})
    } else {
      config.data = config.data || {}
    }
    if ((typeof config.loading) === 'undefined' || config.loading) {
      if (!loading) {
        if (otherConfig.fullscreen) {
          loading = Loading.service({ fullscreen: true, text: otherConfig.loadingTxt })
        } else {
          // if (!config.other || !config.other.el) {
          //   otherConfig.el = document.body
          // }
          if (otherConfig.el) {
            loading = Loading.service({ target: otherConfig.el, text: otherConfig.loadingTxt })
          }
        }
      }
    }
    if (config.hideError) {
      hideError = config.hideError
    } else {
      hideError = false
    }
    if (config.contentType) {
      config.headers['Content-Type'] = config.contentType
    }
    return config
  },
  error => {
    if (loading) {
      loading.close()
      loading = null
    }
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: 'error.data.error.message'
    })
    return Promise.reject(error.data.error.message)
  }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    if (loading) {
      loading.close()
      loading = null
    }
    if (res.data && res.data.code !== 200) {
      if (res.data.code === 10000) {
        // removeIsLogin()
        router.push({
          path: '/login'
        })
      } else
      if (res.data.code === 500) {
        if (!hideError) {
          MessageBox.alert(res.data.msg)
        }
      } else {
        if (res.data.code && !hideError) {
          MessageBox.alert(res.data.msg)
        }
      }
    }
    // 对响应数据做些事
    // if (!res.data || !(res.data && res.data.length && res.data.length > 0)) {
    //   MsgInner({
    //     target: otherConfig.el,
    //     iconClass: 'msg-inner-no-data',
    //     text: '暂无数据'
    //   })
    //   // Message({
    //   //   //  饿了么的消息弹窗组件,类似toast
    //   //   showClose: true,
    //   //   message: res.data.msg,
    //   //   type: 'error'
    //   // });
    //   return Promise.reject(res.data)
    // }
    return res.data
  }, (error) => {
    if (loading) {
      loading.close()
      loading = null
    }
    console.log(error)
    if (error.message.indexOf('timeout') !== -1) {
      return Promise.reject(error)
    } else {
      if (!error.response) {
        router.push({
          path: '/login'
        })
      }
      if (error.response && error.response.status === 404) {
        router.push({
          path: '/404'
        })
      }
      // 返回 response 里的错误信息
      const errorInfo = error.data.error ? error.data.error.message : error.data
      return Promise.reject(errorInfo)
      // return Promise.reject(error)
    }
  }
)

export default Axios
