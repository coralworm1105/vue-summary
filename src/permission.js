import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
import { getIsLogin } from '@/utils/auth' // 验权
import GLOBAL from '@/utils/global'

const whiteList = GLOBAL.WHITELIST // 不重定向白名单
// store.dispatch('LogOut')
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('RESET_LAYOUT', {
    sidebar: true,
    header: true,
    breadcrumb: true
  })
  if (to.matched.length !== 0 && to.path === '/homepage/index') {
    store.commit('RESET_LAYOUT', {
      sidebar: false,
      header: true,
      breadcrumb: false
    })
  }
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    NProgress.done()
  } else if (getIsLogin()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.addRouters.length === 0) {
        store.dispatch('GenerateRoutes', {
          token: localStorage.getItem('token')
        }).then(() => { // 生成可访问的路由表
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          console.log(from.path);
          if (from.path === '/login') {
            next({ path: '/' }) // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a history record
            // to.path = '/?' + new Date().getTime()
          } else {
            next({
              ...to,
              replace: true
            })
            // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a history record
          }
        }).catch((e) => {
          next('/login')
        })
      } else {
        if (to.matched.length === 0) {
          next({ path: '/404' })
          NProgress.done()
        } else {
          next()
        }
      }
    }
  } else {
    next({ path: '/login' })
    NProgress.done()
  }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
