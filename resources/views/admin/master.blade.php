<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>AdminLTE 3 | Starter</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini">
<div id="app">
    <div class="wrapper">

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
</div>

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>

<!-- FontAwesome Kit -->
<script src="https://kit.fontawesome.com/27f72450b3.js"></script>
</body>
</html>
