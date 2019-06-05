const user = {
  state: {
    currentEditUserName: ''// 当前正在编辑的用户名
  },

  mutations: {
    RESET_CURRENT_NAME: (state) => {
      state.currentEditUserName = ''
    },
    SET_CURRENT_NAME: (state, currentEditUserName) => {
      state.currentEditUserName = currentEditUserName
    }
  }
}

export default user
