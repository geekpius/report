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
            'testOne' => $this->test_one,
            'testTwo' => $this->test_two,
            'assignmentOne' => $this->assignment_one,
            'assignmentThree' => $this->assignment_three,
            'assignmentFour' => $this->assignment_four,
            'exam' => $this->exam,
            'student' => $this->whenLoaded('student')
        ];
    }
}
