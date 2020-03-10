import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function dummy(arg) {
    const ary = [arg, 'string'];

    return {
        one: ary,
    }
}

export const store = new Vuex.Store({
    state: {
        flavor: '',
    },

    mutations: {
        change(state, flavor) {
            let a = flavor;
            state.flavor = flavor;
        }
    },

    getters: {
        flavor: state => state.flavor,
    }
})
