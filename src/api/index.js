import request from '@/utils/request';
export const WHITELIST = ['/login', '/404'] // 页面不需要登录验证的路由白名单
export const LOGOUT_URL = `${process.env.SSO_SERVER}/logout?service=http://${window.location.host}${process.env.ROOTP}`
export const HOST = 'http://pangu.adtime.com/img/handle/';
export const baseUrl = '';
export const baseImgPath = '';
/**
 * 获取定位城市
 */
export const cityGuess = () => request.get('/api/cityList',{params: {type: 'guess'}})
/**
 * 获取餐馆列表
 */
export const getResturants = data => request.get('/api/shopping/restaurants', {params: data});
/**
 * 获取餐馆数量
 */
export const getResturantsCount = () => request.get('/api/shopping/restaurants/count');
/**
 * category 食物种类列表
 */ 
export const foodCategory = () => request.get('/api/shopping/foodCategory');
/**
 * 更新餐馆信息
 */
export const updateResturant = data => request({'url': '/api/shopping/updateShop', 'data':data, method: 'post',contentType: 'application/json'}); 
/**
 * 获取搜索地址
 */
export const searchplace = data => request.get('/api/v1/pois', {params: data}); 
/**
 * 删除餐馆
 */
export const deleteResturant = id => request({url: `/api/shopping/restaurant/${id}`, method: 'delete'});
export const addShop = data => request({url: '/api/shopping/addShop', 'data': data, method: 'post', contentType: 'application/json'});