const state = {
    subjectByUser: {}
}

const getters = {
    getSubjectByUser: (state) => {
        return state.subjectByUser
    }
}

const mutations = {
    setSubjectByUser: (state, data) => state.subjectByUser = data
}

const actions = {
    async subjectByUser({commit}, user_id){
        return new Promise((resolve, reject) => {
            axios.get(`/api/users/${user_id}/subject`)
            .then(response => {
              commit('setSubjectByUser', response.data)
              resolve(response.data)
            })
            .catch(err => {
              reject(err)
            })
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
