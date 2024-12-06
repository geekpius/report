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
        'surname',
        'first_name',
        'other_names',
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

    public function setSurnameAttribute(string $value) : void
    {
        $this->attributes['surname'] = strtolower($value);
    }

    public function setFirstNameAttribute(string $value) : void
    {
        $this->attributes['first_name'] = strtolower($value);
    }

    public function setOtherNamesAttribute(?string $value) : void
    {
        $this->attributes['other_names'] = strtolower($value);
    }

    public function getFullName(): string
    {
        return trim($this->surname.' '.$this->first_name. ' '.$this->other_names);
    }
}
