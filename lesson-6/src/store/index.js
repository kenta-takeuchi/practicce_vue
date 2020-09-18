import Vue from "vue"
import Vuex from "vuex"

import axios from "../axios-auth";
import axiosRefresh from '../axios-refresh'
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
        async autoLogin({commit, dispatch}) {
            const idToken = localStorage.getItem('idToken')
            if (!idToken) {
                return
            }
            const now = new Date();
            const expiryTimesMs = localStorage.getItem('expiryTimesMs');
            const isExpired = now.getTime() >= expiryTimesMs;
            const refreshToken = localStorage.getItem('refreshToken')
            if (isExpired) {
                await dispatch('updateIdToken', refreshToken)
            } else {
                const expiresInMs = expiryTimesMs - now.getTime();
                commit('updateIdToken', idToken)
                setTimeout(() => {
                    dispatch('updateIdToken', refreshToken)
                }, expiresInMs)
            }
        },
        login({dispatch}, authdata) {
            axios.post('/accounts/SignIn',
                {
                    email: authdata.email,
                    password: authdata.password
                }
            ).then(response => {
                dispatch('setAuthData', {
                    idToken: response.data.idToken,
                    expiresIn: response.data.expiresIn,
                    refreshToken: response.data.refreshToken,
                })
                router.push('/')
            })
        },
        logout({ commit }) {
            commit('updateIdToken', null);
            localStorage.removeItem('idToken');
            localStorage.removeItem('expiryTimesMs');
            localStorage.removeItem('refreshToken');
            router.replace('/login')
        },
        async refreshIdToken({dispatch}, refreshToken) {
            await axiosRefresh.post('/token',
                {
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken
                }
            ).then(response => {
                dispatch('setAuthData', {
                    idToken: response.data.id_token,
                    expiresIn: response.data.expires_in,
                    refreshToken: response.data.refreshToken,
                })
            })
        },
        register({dispatch}, authdata) {
            axios.post('/accounts/SignUp',
                {
                    email: authdata.email,
                    password: authdata.password
                }
            ).then(response => {
                dispatch('setAuthData', {
                    idToken: response.data.idToken,
                    expiresIn: response.data.expiresIn,
                    refreshToken: response.data.refreshToken,
                })
                router.push('/')
            })
        },
        setAuthData({commit, dispatch}, authData) {
            const now = new Date();
            const expiryTimesMs = now.getTime() + authData.expiresIn * 1000
            commit('updateIdToken', authData.idToken);
            localStorage.setItem('idToken', authData.idToken);
            localStorage.setItem('expiryTimesMs', expiryTimesMs);
            localStorage.setItem('refreshToken', authData.refreshToken);
            setTimeout(() => {
                dispatch('refreshIdToken', authData.refreshToken)
            }, authData.expiresIn * 1000);
        }
    }
})