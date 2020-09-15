import Vue from "vue"
import Vuex from "vuex"

import axios from "../axios-auth";
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null
    },
    getters: {
      idToken: state => state.idToken
    },
    mutations: {
        updateIdToken(state, idToken) {
            state.idToken = idToken
        }
    },
    actions: {
        login({commit}, authdata) {
            axios.post('/accounts/SignIn',
                {
                    email: authdata.email,
                    password: authdata.password
                }
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                router.push('/')
            })
        },
        register({commit}, authdata) {
            axios.post('/accounts/SignUp',
                {
                    email: authdata.email,
                    password: authdata.password
                }
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response);
                router.push('/')
            })
        }
    }
})