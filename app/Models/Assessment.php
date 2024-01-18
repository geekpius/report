<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'level',
        'year',
        'term',
        'number_in_class',
        'attendance',
        'promoted',
        'conduct',
        'attitude',
        'interest',
        'remark',
    ];

}
