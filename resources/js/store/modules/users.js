import axios from "axios"

const state = {
    data: {}
}

const getters = {
    getAccessToken: (state) => {
        return state.data.access_token || localStorage.getItem('access_token')
    },
    getUser: (state) => {
        return state.data.user || JSON.parse(localStorage.getItem('me'))
    }
}

const mutations = {
    setLoginSuccess: (state, data) => state.data = data,
    setLogout: (state) => state.data = {}
}

const actions = {
    async login({commit}, user){
        return new Promise((resolve, reject) => {
            axios.post('/api/login', user)
            .then(response => {
              const token = response.data.access_token
              const user = response.data.user

              localStorage.setItem('access_token', token)
              localStorage.setItem('me', JSON.stringify(user))
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
              commit('setLoginSuccess', response.data)
              resolve(response)
            })
            .catch(err => {
              localStorage.removeItem('token')
              reject(err)
            })
        })
    },
    logout({commit}){
        commit('setLogout')
        localStorage.clear()
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
