<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportController extends Controller
{
    public function authUserName(){
        $authUserName = Auth::user()->name;
        return $authUserName;
    }
}
