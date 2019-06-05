import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    layout: {
      sidebar: true,
      header: true,
      breadcrumb: true
    }
  },
  mutations: {
    RESET_SIDEBAR: state => {
      state.sidebar.opened = !+Cookies.get('sidebarStatus')
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    RESET_LAYOUT: (state, params) => {
      state.layout = Object.assign(state.layout, params)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
