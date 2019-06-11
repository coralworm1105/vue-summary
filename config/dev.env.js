'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  SSO_SERVER: '"http://sso.dev.adt100.net"', //prod:wx4f018befa2bbba80 test: http://sso.dev.adt100.net
  SSO_API_SERVER: '"http://api.dev.adt100.net"', //prod:wx4f018befa2bbba80 test:wxefe4a724baf241eb
  WX_APPID: '"wxa2b43f80deee74aa"', //prod:wx4f018befa2bbba80 test:wxefe4a724baf241eb
  SHARE_HOST: '"http://pai.ailingyong.com"', // prod:http://pai.ailingyong.com test:http://test.ailingyong.com,
  ROOTP:'""',
  ACFTICKET:'"acf_ticket"',
  baseUrl: '',
  baseImgPath: ''
})
