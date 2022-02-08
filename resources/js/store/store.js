import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users'
import subjects from './modules/subjects'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        subjects
    }
})
