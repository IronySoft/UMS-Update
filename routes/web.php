<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Department
Route::resource('department', 'DepartmentController');

//Course
Route::resource('course', 'CourseController');

//Support Controller
Route::get('/auth-user-name', 'SupportController@authUserName')->name('authUserName');
