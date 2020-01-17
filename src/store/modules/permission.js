import { constantRouterMap } from '@/router'
import request from '@/utils/request'
import GLOBAL from '../../utils/global'

const _import = require('../../router/_import_' + process.env.NODE_ENV)
import Layout from '../../views/layout/Layout'
const menuMap = {
  'user': [
    {
      menuUrl: 'personlist',
      hidden: true,
      menuName: '用户查询'
    }, {
      menuUrl: 'persondetail/:id',
      hidden: true,
      menuName: '查看个人账户'
    }, {
      menuUrl: 'personedit',
      hidden: true,
      menuName: '新增账户'
    }, {
      menuUrl: 'personedit/:id',
      hidden: true,
      menuName: '编辑个人账户'
    }, {
      menuUrl: 'changepassword',
      hidden: true,
      menuName: '修改密码'
    }
  ],
  'authorition': [
    {
      menuUrl: 'rolelist',
      hidden: true,
      menuName: '角色列表'
    }, {
      menuUrl: 'editinfo/:id',
      hidden: true,
      menuName: '编辑角色'
    }, {
      menuUrl: 'editinfo',
      hidden: true,
      menuName: '创建角色'
    }
  ],
  'log': [
    {
      menuUrl: 'loglist',
      hidden: true,
      menuName: '日志列表'
    }
  ],
  'advertmonitor': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '广告、宣传监测列表'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      menuName: '广告、宣传监测平台详情'
    },
    {
      menuUrl: 'websiteDetail/:id',
      hidden: true,
      menuName: '广告、宣传监测自身网站详情'
    }
  ],
  'infomonitor': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '商品信息监测列表'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      menuName: '商品信息监测平台详情'
    },
    {
      menuUrl: 'websiteDetail/:id',
      hidden: true,
      menuName: '商品信息监测自身网站详情'
    }
  ],
  'public': [
    {
      menuUrl: 'list',
      hidden: true,
      menuName: '舆情监测列表'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      menuName: '舆情监测详情'
    }
  ],
  'special': [
    {
      menuUrl: 'info',
      hidden: true,
      index: 0,
      menuName: '新增'
    },
    {
      menuUrl: 'info/:id',
      hidden: true,
      index: 0,
      menuName: '修改'
    },
    {
      menuUrl: 'info/:id/:taskname',
      hidden: true,
      index: 0,
      menuName: '复制'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      index: 0,
      menuName: '专项监测详情'
    },
    {
      menuUrl: 'rlts_detail/:id',
      hidden: true,
      index: 1,
      menuName: '专项结果详情'
    }, {
      menuUrl: 'rlts_web_detail/:id',
      hidden: true,
      index: 1,
      menuName: '专项结果详情'
    }
  ],
  'monitorconfig': [ // index的数值必须与接口返回的menuOrder保持一致
    {
      menuUrl: 'keyword_detail',
      hidden: true,
      index: 1,
      menuName: '关键词详情'
    },
    {
      menuUrl: 'keyword_add',
      hidden: true,
      index: 1,
      menuName: '关键词新增'
    },
    {
      menuUrl: 'keyword_add/:id',
      hidden: true,
      index: 1,
      menuName: '关键词修改'
    },
    {
      menuUrl: 'keyword_audit',
      hidden: true,
      index: 1,
      menuName: '关键词审核'
    },
    {
      menuUrl: 'platform_detail',
      hidden: true,
      index: 0,
      menuName: '平台配置详情'
    },
    {
      menuUrl: 'platform_add',
      hidden: true,
      index: 0,
      menuName: '平台配置新增'
    },
    {
      menuUrl: 'platform_add/:id',
      hidden: true,
      index: 0,
      menuName: '平台配置修改'
    },
    {
      menuUrl: 'platform_import',
      hidden: true,
      index: 0,
      menuName: '平台配置导入'
    },
    {
      menuUrl: 'platform_audit',
      hidden: true,
      index: 0,
      menuName: '平台配置审核'
    },
    {
      menuUrl: 'enterprise_detail/:id',
      hidden: true,
      index: 2,
      menuName: '企业信息配置详情'
    },
    {
      menuUrl: 'enterprise_add',
      hidden: true,
      index: 2,
      menuName: '企业信息配置新增'
    },
    {
      menuUrl: 'enterprise_add/:id',
      hidden: true,
      index: 2,
      menuName: '企业信息配置修改'
    },
    {
      menuUrl: 'enterprise_import',
      hidden: true,
      index: 2,
      menuName: '企业信息配置导入'
    },
    {
      menuUrl: 'enterprise_audit/:id',
      hidden: true,
      index: 2,
      menuName: '企业信息配置审核'
    },
    {
      menuUrl: 'group_add',
      hidden: true,
      index: 3,
      menuName: '企业组配置新增'
    },
    {
      menuUrl: 'group_add/:id',
      hidden: true,
      index: 3,
      menuName: '企业组配置修改'
    },
    {
      menuUrl: 'enterprise_index/:id',
      hidden: true,
      index: 3,
      menuName: '企业组详情'
    },
    {
      menuUrl: 'enterprise_detail/:id/:groupid',
      hidden: true,
      index: 3,
      menuName: '企业详情'
    }
  ],
  'pyramidsalemonitor': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '网络传销监测'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      menuName: '网络传销监测平台详情'
    },
    {
      menuUrl: 'websiteDetail/:id',
      hidden: true,
      menuName: '网络传销监测自身网站详情'
    }

  ],
  'fraudmonitor': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '消费欺诈监测'
    }
  ],
  'cateringmonitor': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '餐饮'
    },
    {
      menuUrl: 'detail/:id',
      hidden: true,
      menuName: '餐饮监测平台详情'
    },
    {
      menuUrl: 'websiteDetail/:id',
      hidden: true,
      menuName: '餐饮监测自身网站详情'
    }
  ],
  'report': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '统计报表'
    }
  ],
  'dataexport': [
    {
      menuUrl: 'index',
      hidden: true,
      menuName: '数据导出'
    }
  ]
}
// 首页全部菜单
const indexIconList = ['/advertmonitor', '/infomonitor', '/public', '/special', '/monitorconfig', '/pyramidsalemonitor', '/fraudmonitor', '/report', '/dataexport']
/*
 * 根据后台回过来的菜单创建一个路由
 */
function createRouter(item) {
  const router = {
    path: `${item.menuUrl}`,
    meta: { title: item.menuName, icon: 'f', active: item.active }
  }
  if (!item.hideName) {
    router.name = item.menuName
  }
  if (item.menuUrl.substring(0, 1) === '/') {
    router.meta.icon = item.menuUrl.substring(1, (item.menuUrl.length))
  }
  if (item.breadcrumb) {
    router.meta.breadcrumb = item.breadcrumb
  }
  if (item.redirect) {
    router.redirect = item.redirect
  }
  if (!item.subMenuList || item.subMenuList.length === 0) {
    router.component = _import(item.page)
  } else {
    router.component = Layout
    // router.showChild = true
  }
  if (item.showChild) {
    router.showChild = true
  }
  if (item.hidden) {
    router.hidden = true
  }
  return router
}
function isShowChild(list) {
  let flag = false
  for (let i = 0; i < list.length; i++) {
    if (!list[i].hidden) {
      flag = true
    }
  }
  return flag
}
/**
 * 得到所有的路由结构
 * @param routers
 * @param menu
 * @param preUrl
 * @returns {*}
 */
function getRouters(routers, menu, preUrl, parent) {
  for (let i = 0; i < menu.length; i++) {
    let item = {}
    if (preUrl) {
      menu[i].menuPath = `${preUrl}/${menu[i].menuUrl}`
    } else {
      menu[i].menuPath = `${menu[i].menuUrl}`
    }
    const urls = menu[i].menuPath.split(':')
    if (urls.length > 1) {
      menu[i].page = urls[0].substring(1, urls[0].length - 1)
    } else {
      menu[i].page = urls[0].substring(1, urls[0].length)
    }
    menu[i].subMenuList = menu[i].subMenuList || []
    const urlKey = menu[i]
      .menuPath
      .substring(1, (menu[i].menuPath.length))
    if (menuMap[urlKey]) {
      menu[i].subMenuList = Object.assign([], menu[i].subMenuList.concat(menuMap[urlKey]))
    }
    if (parent && !parent.showChild) {
      menu[i].active = menu[0].active
    } else if (!parent) {
      menu[i].showChild = menu[i].subMenuList && menu[i].subMenuList.length > 0
        ? isShowChild(menu[i].subMenuList)
        : false
      menu[i].active = '' + (i + 1)
    } else {
      if (menu[i].hidden) {
        if (menu[i].index || menu[i].index === 0) {
          menu[i].active = menu[menu[i].index].active
          let breadcrumb = {
            name: menu[menu[i].index].menuName,
            path: menu[menu[i].index].menuUrl
          }
          menu[i].breadcrumb = breadcrumb
        } else {
          menu[i].active = menu[0].active
        }
      } else {
        menu[i].active = `${parent.active}-${(i + 1)}`
      }
    }
    console.log(menu[i]);
    item = createRouter(menu[i])
    if (menu[i].subMenuList && menu[i].subMenuList.length > 0) {
      item.children = []
      if (!menu[i].showChild) {
        menu[i].subMenuList[0].hideName = true
        menu[i].subMenuList[0].active = menu[i].active
      }
      getRouters(item.children, menu[i].subMenuList, `${menu[i].menuPath}`, menu[i])
      item.redirect = menu[i].subMenuList[0].menuPath
    }
    routers.push(item)
  }
  return routers
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    RESET_PERMISSION: (state) => {
      state.routers = constantRouterMap
      state.addRouters = []
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, rj) => {
        request({
          url: "/mock/getMenu",
          method: 'get',
          params: {
            token: data.token
          }
        }).then(response => {
          debugger
          console.log(constantRouterMap);
          const accessedRouters = []
          getRouters(accessedRouters, response.data, '')
          let router = {
            path: '/',
            component: Layout,
            name: '',
            redirect: accessedRouters[0].path,
            hidden: true
          }
          accessedRouters.push(router)
          console.log(constantRouterMap);
          try {
            let alist = constantRouterMap.concat(accessedRouters);
          } catch (error) {
            console.log(error);
          }
          
          console.log(alist);
          commit('SET_ROUTERS', accessedRouters)
          console.log(constantRouterMap);
          console.log(state.routers)
          resolve()
        }).catch(() => {
          rj()
        })
      })
    }
  }
}

export default permission
