<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'show_position',
        'school_name',
        'school_postal',
        'motto',
        'school_phone',
        'signature',
        'stamp',
        'logo',
    ];

    public function setSchoolNameAttribute(?string $value): void
    {
        $this->attributes['school_name'] = strtolower($value);
    }
    public function getSchoolNameAttribute(?string $value): string
    {
        return strtoupper($value);
    }

}
