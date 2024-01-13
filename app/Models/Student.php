<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    const ACTIVE = 'active';
    const DROPPED_OUT = 'dropped out';
    const COMPLETED = 'completed';

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
