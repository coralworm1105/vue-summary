import Cookies from 'js-cookie'

const TokenKey = process.env.ACFTICKET
const ACF_TICKET = process.env.ACFTICKET

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getAcfticket() {
  return Cookies.get(ACF_TICKET)
}

export function setAcfticket(ticket) {
  return Cookies.set(ACF_TICKET, ticket)
}

export function removeAcfticket() {
  return Cookies.remove(ACF_TICKET)
}

export function setIsLogin(value) {
  return Cookies.set('isLogin', value)
}

export function getIsLogin() {
  return Cookies.get('isLogin')
}

export function removeIsLogin() {
  return Cookies.remove('isLogin')
}
