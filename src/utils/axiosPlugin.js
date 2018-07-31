import Axios from './request'
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, 'axios', { value: Axios })
  }
}


// this.axios({
//   method: 'post',
//   url: API.QUERY_BY_SYNTAX,
//   data: {

//   },
//   timeout: 100,
//   contentType: 'application/json'
// }).then((res) => {
//   this.fullscreenLoading = false
//   if (res.code === 200) {

//   }
// }).catch((error) => {
  //请求超时给出提示
//   this.fullscreenLoading = false
//   if (error.message.indexOf('timeout') !== -1) {
//     MessageBox.alert('您查询的数据量过大，请更改查询条件')
//   }
// })