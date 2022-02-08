require('./bootstrap');

import Vue from 'vue';
import router from './router/router.js'
import store from "./store/store";
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store
});
