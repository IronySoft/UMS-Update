require('./bootstrap');
window.Vue = require('vue');
import vuetify from './packages/vuetify'
//Vue-Router
import router from './packages/route'


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('my-navbar', require('./components/admin/includes/Navbar').default);
Vue.component('my-sidebar', require('./components/admin/includes/Sidebar').default);
Vue.component('my-footer', require('./components/admin/includes/Footer').default);


const app = new Vue({
    el: '#app',
    router,
    vuetify
});
