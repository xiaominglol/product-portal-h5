import Vue from 'vue'
import Vuex from 'vuex'
import member from './modules/member'
import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: 'haha'
    },
    mutations: {},
    actions: {},
    modules: {
        member,
        goods
    }
})
