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



                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>
                                Teacher
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>Save Teacher</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>Manage Teacher</p>
                                </a>
                            </li>
                        </ul>
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

            //Auth-User-Name
            axios.get('/auth-user-name').then((response) => {
                this.authUserName = response.data
            })
                .catch((error) => {
                    console.log(error)
                })
        },


    }
</script>

<style scoped>

</style>
