import Vue from 'vue'
import VueRouter from 'vue-router'

//Component
import Department from "../components/admin/department/Department";
import Course from "../components/admin/Course/Course";
import ExampleComponent from "../components/ExampleComponent";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/department',
            component: Department

        },

        {
            path: '/course',
            component: Course

        },

        {
            path: '/example',
            component: ExampleComponent

        },
    ]
});
