require('./bootstrap');
import Vue from 'vue'
import vuetify from './packages/vuetify'
//Vue-Router
import router from './packages/route'
import axios from 'axios'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('my-navbar', require('./components/admin/includes/Navbar').default);
Vue.component('my-sidebar', require('./components/admin/includes/Sidebar').default);
Vue.component('my-footer', require('./components/admin/includes/Footer').default);
Vue.component('my-login', require('./components/admin/Login/Login').default);

var bus = new Vue()
Vue.prototype.$bus = bus
Vue.prototype.$axios = axios


const app2 = new Vue({
    el: '#app',
    router,
    vuetify
});
