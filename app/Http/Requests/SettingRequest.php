<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return  [
            'show_position' => ['nullable', 'boolean',],
            'school_name' => ['nullable', 'string',],
            'school_postal' => ['nullable', 'string',],
            'motto' => ['nullable', 'string',],
            'school_phone' => ['nullable', 'string',],
            'sba_percent' => ['nullable', 'numeric',],
            'exam_percent' => ['nullable', 'numeric',],
        ];
    }
}
