import Vue from 'vue'
import Router from 'vue-router'
import { adminMap } from './admin'
import { bussinessMap } from './bussiness'
import common from './common'
import _ from 'lodash'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)
export const constantRouterMap = common
// export const asyncRouterMap = _.concat(adminMap, bussinessMap)
export const asyncRouterMap = adminMap;
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

