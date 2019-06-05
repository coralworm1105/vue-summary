const API = {
  POST_LOGIN: '/api/login/authenticate', // 登录
  POST_LOGOUT: '/api/logout', // 登出
  GET_AUTH_BY_ID: '/api/menu/list_by_role', // 根据id获取角色列表
  DELETE_USER: '/api/user/delete', // 删除用户信息
  UPDATE_USER_PASSWORD: '/api/user/password/update', // 修改密码
  GET_ROLE_LIST: '/api/role/list', // 角色列表// 活动列表
  GET_USER_LIST: '/api/user/list', // 用户列表
  GET_MENU_LIST: '/api/user/menu/list', // 获取用户菜单
  ADD_ROLE: '/api/role/add', // 新增角色
  DEL_ROLE: '/api/role/delete', // 删除角色
  UPDATE_ROLE: '/api/role/update', // 修改角色信息
  GET_USERTYPE_LIST: '/api/user/userType/list', // 获取用户类型列表
  GET_USER_BY_ID: '/api/user/get', // 根据用户id获取用户信息
  GET_API_LOG_LIST: '/api/apiLog/list', // 获取日志列表
  GET_API_USER_LIST: '/api/user/list', // 获取日志用户列表
  GET_LOG_LIST: '/api/log/list', // 获取日志列表
  GET_LOG_OPTYPES: '/api/log/opTypes', // 获取日志操作类型列表
  UPLOAD: '/api/common/upload', // 上传文件
  // 用户信息处理类
  GET_PERSON_DETAIL: '/api/user/person/getDetail', // 获得个人账户详细信息
  GET_PERSON_LIST: '/api/user/person/list', // 获得个人账户列表'
  ADD_PERSON: '/api/user/person/add', // 增加个人账户信息
  UPDATE_PERSON: '/api/user/person/update', // 更新个人信息
  // 广告监测
  GET_PLAT_LIST: '/api/resource/getPlatList', // 平台列表-广告监测
  GET_ADVERT_LIST: '/api/advMonitor/pageAdvList', // 广告监测列表
  GET_AGENT_LIST: '/api/resource/getAgentList', // 机构列表
  // 商品信息监测
  GET_PROD_LIST: '/api/prodMonitor/pageProdList', // 获取商品信息监测列表
  GET_PROD_SETTLED_LIST: '/api/prodMonitor/pageSettledList', // 商品监测信息处理历史列表
  GET_PROD_DTL: '/api/prodMonitor/prodDtl', // 获取商品监测详情
  SETTLE_PROD: '/api/prodMonitor/settle', // 处理商品监测
  // GET_PLATlIST: '/api/resource/getPlatList', // 获取平台列表
  EXPORT_PROD_MONITOR: '/api/prodMonitor/export', // 商品监测信息数据导出
  // 数据导出
  GET_DATA_EXPORT: '/api/dataExport/pageList', // 获取数据导出列表
  // 网络传销监测
  GET_PSM_LIST: '/api/pyramidSaleMonitor/pagePyramidSaleList', // 网络传销监测列表
  GET_PSM_DETAIL: '/api/pyramidSaleMonitor/PyramidSaleDtl', // 获取网络详情
  GET_PSM_SETTLE_LIST: '/api/pyramidSaleMonitor/pageSettledList', // 网络处理历史列表
  POST_PSM_SETTLE: '/api/pyramidSaleMonitor/settle', // 处理网络
  EXPORT_PSM: '/api/pyramidSaleMonitor/export', // 网络导出
  // 餐饮监测
  GET_CAT_LIST: '/api/cateringMonitor/pageCateringList', // 餐饮监测监测列表
  GET_CAT_DETAIL: '/api/cateringMonitor/CateringDtl', // 获取餐饮详情
  GET_CAT_SETTLE_LIST: '/api/cateringMonitor/pageSettledList', // 餐饮处理历史列表
  POST_CAT_SETTLE: '/api/cateringMonitor/settle', // 处理餐饮
  EXPORT_CAT: '/api/cateringMonitor/export' // 餐饮导出

}
const WHITELIST = ['/login', '/404'] // 页面不需要登录验证的路由白名单
const LOGOUT_URL = `${process.env.SSO_SERVER}/logout?service=http://${window.location.host}${process.env.ROOTP}`
const HOST = 'http://pangu.adtime.com/img/handle/'
module.exports = {
  API,
  WHITELIST,
  LOGOUT_URL,
  HOST
}
