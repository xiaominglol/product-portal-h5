// import {login} from '../../api/member'

const state = {
    goods: [{name: 'haha'}]
}

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

const actions = {
    saveMember({commit}, member) {
        commit("member", {member})
    }
}

const mutations = {
    ["member"](state, {member}) {
        state.member.member = member
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
