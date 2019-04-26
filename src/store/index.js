import Vue from 'vue'
import Vuex from 'vuex';
import cart from './modules/cart';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        cart,
        user
    },
    getters
})
export default store;