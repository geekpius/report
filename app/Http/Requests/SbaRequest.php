<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SbaRequest extends FormRequest
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
            'form' => ['required', 'string',],
            'subject' => ['required', 'string',],
            'assessment_one' => ['required', 'numeric',],
            'assessment_two' => ['required', 'numeric',],
            'assessment_three' => ['required', 'numeric',],
            'assessment_four' => ['required', 'numeric',],
            'test_one' => ['required', 'numeric',],
            'test_two' => ['required', 'numeric',],
            'assignment_one' => ['required', 'numeric',],
            'assignment_two' => ['required', 'numeric',],
            'assignment_three' => ['required', 'numeric',],
            'assignment_four' => ['required', 'numeric',],
            'exam' => ['required', 'numeric',],
        ];
    }
}
