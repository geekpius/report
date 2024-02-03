<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MarkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'year' => $this->year,
            'term' => $this->term,
            'form' => $this->form,
            'subject' => $this->subject,
            'assessmentOne' => $this->assessment_one,
            'assessmentTwo' => $this->assessment_two,
            'assessmentThree' => $this->assessment_three,
            'assessmentFour' => $this->assessment_four,
            'assessmentSubTotal' => $this->assessment_sub_total,
            'testOne' => $this->test_one,
            'testTwo' => $this->test_two,
            'testSubTotal' => $this->test_sub_total,
            'assignmentOne' => $this->assignment_one,
            'assignmentTwo' => $this->assignment_two,
            'assignmentThree' => $this->assignment_three,
            'assignmentFour' => $this->assignment_four,
            'assignmentSubTotal' => $this->assignment_sub_total,
            'exam' => $this->exam,
            'remark' => $this->remark,
            'sbaPercent' => $this->sba_percent,
            'examPercent' => $this->exam_percent,
            'total' => $this->total,
            'student' => $this->whenLoaded('student')
        ];
    }
}
