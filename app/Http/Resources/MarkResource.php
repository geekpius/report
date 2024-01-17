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
            'assessmentSubTotal' => $this->getAssessmentSubTotal(),
            'testOne' => $this->test_one,
            'testTwo' => $this->test_two,
            'testSubTotal' => $this->getTestSubTotal(),
            'assignmentOne' => $this->assignment_one,
            'assignmentTwo' => $this->assignment_two,
            'assignmentThree' => $this->assignment_three,
            'assignmentFour' => $this->assignment_four,
            'assignmentSubTotal' => $this->getAssignmentSubTotal(),
            'exam' => $this->exam,
            'remark' => $this->remark,
            'student' => $this->whenLoaded('student')
        ];
    }
}
