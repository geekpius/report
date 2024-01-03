<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'name',
        'gender',
        'form',
        'status',
    ];

    public function setNameAttribute(string $value) : void
    {
        $this->attributes['name'] = strtolower($value);
    }
    public function getNameAttribute(string $value) : string
    {
        return ucwords($value);
    }
}
