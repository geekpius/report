<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subject extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'type',
    ];

    public function levels(): BelongsToMany
    {
        return $this->belongsToMany(Level::class);
    }

    public function setNameAttribute(string $value) : void
    {
        $this->attributes['name'] = strtolower($value);
    }
    public function getNameAttribute(string $value) : string
    {
        return strtoupper($value);
    }
}
