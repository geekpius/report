<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
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
            'number' => $this->number,
            'surname' => $this->surname,
            'firstName' => $this->first_name,
            'otherNames' => $this->other_names,
            'fullName' => $this->getFullName(),
            'gender' => $this->gender,
            'form' => $this->form,
            'status' => $this->status,
            'marks' => $this->whenLoaded('marks'),
        ];
    }
}
