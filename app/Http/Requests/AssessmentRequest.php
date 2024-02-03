<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AssessmentRequest extends FormRequest
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
            'student_id' => ['required', 'integer',],
            'year' => ['required', 'string',],
            'term' => ['required', 'string',],
            'level' => ['required', 'string',],
            'number_in_class' => ['required', 'integer',],
            'attendance' => ['required', 'integer',],
            'promoted' => ['required', 'string',],
            'conduct' => ['required', 'string',],
            'attitude' => ['required', 'string',],
            'interest' => ['required', 'string',],
            'remark' => ['required', 'string',],
        ];
    }
}
