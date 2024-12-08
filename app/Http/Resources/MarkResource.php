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
            'assessmentOne' => $this->assessment_one ?? 0,
            'assessmentTwo' => $this->assessment_two ?? 0,
            'assessmentThree' => $this->assessment_three ?? 0,
            'assessmentFour' => $this->assessment_four ?? 0,
            'assessmentSubTotal' => $this->assessment_sub_total ?? 0,
            'testOne' => $this->test_one ?? 0,
            'testTwo' => $this->test_two ?? 0,
            'testSubTotal' => $this->test_sub_total ?? 0,
            'assignmentOne' => $this->assignment_one ?? 0,
            'assignmentTwo' => $this->assignment_two ?? 0,
            'assignmentThree' => $this->assignment_three ?? 0,
            'assignmentFour' => $this->assignment_four ?? 0,
            'assignmentSubTotal' => $this->assignment_sub_total ?? 0,
            'exam' => $this->exam ?? 0,
            'remark' => $this->remark,
            'sbaPercent' => $this->sba_percent ?? 0,
            'examPercent' => $this->exam_percent ?? 0,
            'total' => $this->total ?? 0,
            'student' => $this->whenLoaded('student')
        ];
    }
}
