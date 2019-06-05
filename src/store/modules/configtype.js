import Cookies from 'js-cookie'
const config = {
  state: {
    type: ''
  },
  mutations: {
    RESET_TYPE: state => {
      // state.type = 1
      state.type = ''
    },
    TYPE_CHANGE: (state, param) => {
      Cookies.set('type', param)
      state.type = param
    }
  }
}
export default config
