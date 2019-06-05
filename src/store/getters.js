const getters = {
  sidebar: state => state.app.sidebar,
  layout: state => state.app.layout,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  currentEditUserName: state => state.edituser.currentEditUserName,
  type: state => state.config.type
}
export default getters
