const WHITELIST = ['/login', '/404'] // 页面不需要登录验证的路由白名单
const LOGOUT_URL = `${process.env.SSO_SERVER}/logout?service=http://${window.location.host}${process.env.ROOTP}`
const HOST = 'http://pangu.adtime.com/img/handle/'
module.exports = {
  WHITELIST,
  LOGOUT_URL,
  HOST
}
