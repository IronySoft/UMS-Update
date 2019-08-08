<template>
    <div>

        <!-- Navbar -->
        <my-navbar></my-navbar>

        <!-- Main Sidebar Container -->
        <my-sidebar></my-sidebar>

        <!-- Content-->
        <div class="content-wrapper">

            <router-view></router-view>

        </div>
        <!--Footer -->
        <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>