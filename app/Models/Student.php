<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    public function marks(): HasMany
    {
        return $this->hasMany(Mark::class);
    }

    public function overalls(): HasMany
    {
        return $this->hasMany(Overall::class);
    }

    public function assessments(): HasMany
    {
        return $this->hasMany(Assessment::class);
    }

    public function setNameAttribute(string $value) : void
    {
        $this->attributes['name'] = strtolower($value);
    }
    public function getNameAttribute(string $value) : string
    {
        return ucwords($value);
    }
}
