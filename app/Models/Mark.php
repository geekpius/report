<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mark extends Model
{
    use HasFactory;


    protected $fillable = [
        'student_id',
        'year',
        'term',
        'form',
        'subject',
        'assessment_one',
        'assessment_two',
        'assessment_three',
        'assessment_four',
        'assessment_sub_total',
        'test_one',
        'test_two',
        'test_sub_total',
        'assignment_one',
        'assignment_two',
        'assignment_three',
        'assignment_four',
        'assignment_sub_total',
        'exam',
        'remark',
        'sba_percent',
        'exam_percent',
        'total',
    ];
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function setSubjectAttribute(string $value) : void
    {
        $this->attributes['subject'] = strtolower($value);
    }
    public function getSubjectAttribute(string $value) : string
    {
        return strtoupper($value);
    }

    public function setRemarkAttribute(string $value) : void
    {
        $this->attributes['remark'] = strtolower($value);
    }
    public function getRemarkAttribute(string $value) : string
    {
        return ucwords($value);
    }

    public function updateMarkTotal()
    {
        $this->update([
            'total' => $this->assessment_sub_total + $this->test_sub_total + $this->assignment_sub_total + $this->exam,
        ]);
    }


}
