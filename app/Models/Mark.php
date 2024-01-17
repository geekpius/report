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
        'test_one',
        'test_two',
        'assignment_one',
        'assignment_two',
        'assignment_three',
        'assignment_four',
        'exam',
        'remark',
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

    public function getSubjectTotalMarks(): string
    {
        $value = $this->assessment_one + $this->assessment_two + $this->assessment_three
            + $this->assessment_four + $this->test_one + $this->test_two + $this->assignment_one
            + $this->assignment_two + $this->assignment_three + $this->assignment_four + $this->exam;
        return number_format($value, 2);
    }

    public function getAssessmentSubTotal(): string
    {
        $value = $this->assessment_one + $this->assessment_two + $this->assessment_three
            + $this->assessment_four;
        return number_format($value);
    }

    public function getTestSubTotal(): string
    {
        $value = $this->test_one + $this->test_two;
        return number_format($value);
    }

    public function getAssignmentSubTotal(): string
    {
        $value = $this->assignment_one + $this->assignment_two + $this->assignment_three + $this->assignment_four;
        return number_format($value);
    }


}
