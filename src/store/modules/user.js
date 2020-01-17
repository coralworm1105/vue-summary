import request from '@/utils/request'
import { getToken, removeToken, setIsLogin, removeIsLogin } from '@/utils/auth'
import { MD5 } from '@/utils/md5'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    RESET_USER: (state) => {
      state.token = getToken()
      state.name = ''
      state.avatar = ''
      state.roles = []
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username
      const password = MD5(username + userInfo.password + 'adtime.com')
      return new Promise((resolve, reject) => {
        request({
          // url: GLOBAL.API.POST_LOGIN,
          url: '/mock/login',
          method: 'post',
          hideError: true,
          data: {
            username,
            password
          }
        }).then(response => {
          console.log(response);
          if (response.code === 200) {
            setIsLogin(true)
            localStorage.setItem('loginUsername', username);
            localStorage.setItem('token', response.data.token);
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetMenu({commit}, data){
      return new Promise((resolve, reject) => {
        request({
          url: '/mock/getMenu',
          method: 'get',
          hideError: true,
          params: {
            token: data.token
          }
        }).then(res => {
          if (res.code === 200) {
            console.log(res);
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit }, userInfo) {
      const userMap = {
        admin: {
          role: ['admin'],
          token: 'admin',
          introduction: '我是超级管理员',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Super Admin'
        },
        editor: {
          role: ['editor'],
          token: 'editor',
          introduction: '我是编辑',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Normal Editor'
        }
      }
      return new Promise((resolve, reject) => {
        const { username } = userInfo
        let role = 'admin'
        if (username !== 'adtime') {
          role = 'admin'
        }
        commit('SET_ROLES', userMap[role])
        commit('SET_AVATAR', userMap[role].avatar)
        commit('SET_NAME', userMap[role].name)
        resolve(userMap[role])
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        request({
          url: GLOBAL.API.POST_LOGOUT,
          method: 'get'
        }).then(response => {
          removeIsLogin()
          localStorage.removeItem('loginUsername')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
