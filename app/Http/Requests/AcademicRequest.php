<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AcademicRequest extends FormRequest
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
            'year' => ['required', 'string',],
            'term' => ['required', 'string',],
            'next_term_date' => ['required', 'date',],
            'total_attendant' => ['required', 'integer',],
        ];
    }
}
