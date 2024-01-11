<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;
    protected $fillable = [
        'low',
        'high',
        'remark',
    ];

    public function setRemarkAttribute(string $value) : void
    {
        $this->attributes['remark'] = strtolower($value);
    }
    public function getRemarkAttribute(string $value) : string
    {
        return ucwords($value);
    }
}
