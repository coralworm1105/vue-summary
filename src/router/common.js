const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from '../views/layout/Layout'
const commonMap = [
  { path: '/login', component: _import('login/login'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  // {
  //   path: '/',
  //   component: Layout,
  //   name: '',
  //   redirect: '/map/amap',
  //   hidden: true
  // }
  // { path: '*', redirect: '/404', hidden: true }
]
export default commonMap
