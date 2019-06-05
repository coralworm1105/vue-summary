import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      component: _import('login/login')
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/index',
      component: Layout,
      showChild: true,
      meta: { title: 'HelloWorld', icon: 'table', role: ['admin', 'editor']},
      children: [{
        path: 'index',
        component: HelloWorld,
        meta: {title:"helloworld", icon: 'tag', role: ['admin', 'editor']}
      }]
    },
    {
      path: '/map',
      component: Layout,
      meta: {title:"地图",icon: 'table', role: ['admin', 'editor']},
      showChild: true,
      children: [{
        path: 'index',
        component: _import('map/amap'),
        meta: {title:"高德地图", icon: 'tag', role: ['admin', 'editor']}
      }]
    },
    {
      path: '/css3',
      name: 'css3',
      component: Layout,
      showChild: true,
      meta: {title:"css3", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'transition',
          name: 'transition',
          component: _import('css3/transition'),
          meta: {title:"transition", icon: 'tag', role: ['admin', 'editor']}
        }, 
        {
          path: 'flex',
          name: 'flex',
          component: _import('css3/flex'),
          meta: {title:"flex", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'juzhong',
          name: 'juzhong',
          component: _import('css3/juzhong'),
          meta: {title:"居中", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'popover',
          name: 'popover',
          component: _import('css3/popover'),
          meta: {title:"提示框", icon: 'tag', role: ['admin', 'editor']}
        }        
      ]
    },
    {
      path: '/drag',
      name: 'drag',
      component: Layout,
      showChild: true,
      meta: {title:"拖曳", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'drag',
          name: 'drag',
          component: _import('drag/drag'),
          meta: {title:"draggableSort", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'drag2',
          name: 'drag2',
          component: _import('drag/drag2'),
          meta: {title:"draggableResizable", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'drag3',
          name: 'drag3',
          component: _import('drag/drag3'),
          meta: {title:"draggableGridLayout", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'dragValidate',
          name: 'dragValidate',
          component: _import('drag/dragValidate'),
          meta: {title:"拖动验证", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'es6',
          name: 'es6',
          component: _import('drag/es6'),
          meta: {title:"es6", icon: 'tag', role: ['admin', 'editor']}
        }        
      ]
    },
    {
      path: '/img-crop',
      name: 'img-crop',
      component: Layout,
      showChild: true,
      meta: {title:"图片裁剪", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'img-crop-upload',
          name: 'img-crop-upload',
          component: _import('img-crop/img-crop-upload'),
          meta: {title:"设置头像", icon: 'tag', role: ['admin', 'editor']}
        }
      ]
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: Layout,
      showChild: true,
      meta: {title:"懒加载", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'index',
          name: 'index',
          component: _import('lazyload/index'),
          meta: {title:"图片", icon: 'tag', role: ['admin', 'editor']}
        }
      ]      
    },
    {
      path: '/request',
      name: 'request',
      component: Layout,
      showChild: true,
      meta: {title:"request", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'table',
          name: 'table',
          component: _import('request/table'),
          meta: {title:"table", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'userManage',
          name: '用户管理',
          component: _import('request/userManage/index'),
          meta: {title:"用户管理", icon: 'tag', role: ['admin', 'editor']}
        }
      ]      
    },
    {
      path: '/question',
      name: 'question',
      component: Layout,
      showChild: true,
      meta: {title:"question", icon: 'table', role: ['admin', 'editor']},
      children: [
        {
          path: 'index',
          name: 'index',
          component: _import('question/index'),
          meta: {title:"index", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'requestAnimationFrame',
          name: 'requestAnimationFrame',
          component: _import('question/requestAnimationFrame'),
          meta: {title:"requestAnimationFrame用法", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'scrollTopAb',
          name: 'scrollTopAb',
          component: _import('question/scrollTopAb'),
          meta: {title:"滚动吸顶", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'sort',
          name: 'sort',
          component: _import('question/sort'),
          meta: {title:"排序方法总结", icon: 'tag', role: ['admin', 'editor']}
        },
        {
          path: 'storeDemo',
          name: 'storeDemo',
          component: _import('question/storeDemo'),
          meta: {title:"store总结", icon: 'tag', role: ['admin', 'editor']}
        }
      ]      
    }           
  ]
})
