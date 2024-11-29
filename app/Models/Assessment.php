<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'head_remark',
    ];


    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function getPromoted(): string
    {
        if($this->promoted === $this->student->form && strtolower($this->term) !== 'three') return '-';
        if($this->promoted === $this->student->form && strtolower($this->term) === 'three') return 'Repeated';
        return $this->promoted;
    }

}
