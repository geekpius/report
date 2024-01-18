<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssessmentResource extends JsonResource
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
            'level' => $this->level,
            'numberInClass' => $this->number_in_class,
            'attendance' => $this->attendance,
            'promoted' => $this->promoted,
            'conduct' => $this->conduct,
            'attitude' => $this->attitude,
            'interest' => $this->interest,
            'remark' => $this->remark,
            'student' => $this->whenLoaded('student')
        ];
    }
}
