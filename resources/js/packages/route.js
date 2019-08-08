import Vue from 'vue'
import VueRouter from 'vue-router'

//Component

import Login from "../components/admin/Login/Login";
import Department from "../components/admin/department/Department";
import TeacherIndex from "../components/admin/Teacher/Index";
import Course from "../components/admin/Course/Course";
import ExampleComponent from "../components/ExampleComponent";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/department',
            component: Department

        },

        {
            path: '/course',
            component: Course

        },
        {
            path: '/teacher-index',
            name:'teacher.index',
            component: TeacherIndex

        },
        {
            path: '/example',
            component: ExampleComponent,

        },
    ]
});
