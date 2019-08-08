<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">

        <!-- Brand Logo -->
        <a href="" class="brand-link">
            <img src="../../../assets/img/BrandLogo.png" alt="AdminLTE Logo"
                 class="brand-image img-circle elevation-3"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">UMS</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">

            <!-- User Panel-->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../../assets/img/Admin.png" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="" class="d-block">{{authUserName}}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">

                    <li class="nav-item">
                        <router-link :to="{path:'/department'}" class="nav-link">
                            <i class="nav-icon fa fa-graduation-cap"></i>
                            <p>
                                Department
                            </p>
                        </router-link>
                    </li>


                    <li class="nav-item">
                        <router-link :to="{path:'/course'}" class="nav-link">
                            <i class="nav-icon fa fa-book"></i>
                            <p>
                                Course
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'teacher.index'}" class="nav-link">
                            <i class="nav-icon fa fa-book"></i>
                            <p>
                                Teacher
                            </p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{path:'/example'}" class="nav-link">
                            <i class="nav-icon fa fa-th"></i>
                            <p>
                                Notice Board
                                <span class="right badge badge-danger">New</span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <form @submit="logout">
                            <button type="submit" class="nav-link">
                                <i class="nav-icon fa fa-th"></i>
                                <p>
                                   Logout
                                </p>
                            </button>
                        </form>

                    </li>


                </ul>
            </nav>

        </div>

    </aside>
</template>

<script>

    export default {
        name: "Sidebar",

        data() {
            return {
                authUserName: ''
            }
        },

        mounted() {
            axios.get('/auth-user-name').then((response) => {
                this.authUserName = response.data
            }).catch((error) => {
                    console.log(error)
                })
        },
        methods:{
            logout(){
               this.$axios.post('logout').then(function (res) {
                   alert('Ho')
               }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>
