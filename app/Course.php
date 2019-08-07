<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable=[
        'code','name', 'credit','description', 'department','semester'
    ];
}
