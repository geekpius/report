<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Level extends Model
{
    use HasFactory;

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'level_subject')->withTimestamps();
    }
}
