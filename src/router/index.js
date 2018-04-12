import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aMapPage from '@/views/amap'
import css3Feature from '@/views/css3-feature'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/amap',
      name: 'amap',
      component: aMapPage
    },
    {
      path: '/css3',
      name: 'css3',
      component: css3Feature
    }
  ]
})
