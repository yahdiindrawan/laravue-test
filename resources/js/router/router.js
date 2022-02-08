import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login,
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach(((to, from, next) => {
    // Check Authentication
    if(to.matched.some(record => record.meta.auth)){
      if(localStorage.getItem('access_token') === null){
        next('/');
      } else {
        next();
      }
    }
    else {
      next();
    }
  }))

export default router
