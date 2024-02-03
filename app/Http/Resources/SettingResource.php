<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'showPosition' => (boolean) $this->show_position,
            'schoolName' => $this->school_name,
            'schoolPostal' => $this->school_postal,
            'motto' => $this->motto,
            'schoolPhone' => $this->school_phone,
            'sbaPercent' => $this->sba_percent,
            'examPercent' => $this->exam_percent,
            'signature' => $this->signature,
            'stamp' => $this->stamp,
            'logo' => $this->logo,
        ];
    }
}
