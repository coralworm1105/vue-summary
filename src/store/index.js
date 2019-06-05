import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import config from './modules/configtype'
import user from './modules/user'
import edituser from './modules/edituser'
// import permission from './modules/permission'
import permission from './modules/permission1'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    config,
    user,
    permission,
    edituser
  },
  getters
})

export default store
