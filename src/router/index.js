import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)

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
      component: _import('amap')
    },
    {
      path: '/transition',
      name: 'transition',
      component: _import('css3/transition')
    },
    {
      path: '/flex',
      name: 'flex',
      component: _import('css3/flex')
    },
    {
      path: '/juzhong',
      name: 'juzhong',
      component: _import('css3/juzhong')
    },
    {
      path: '/drag',
      name: 'drag',
      component: _import('drag/drag')
    },
    {
      path: '/drag2',
      name: 'drag2',
      component: _import('drag/drag2')
    },
    {
      path: '/drag3',
      name: 'drag3',
      component: _import('drag/drag3')
    }
  ]
})
