<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MarkRequest extends FormRequest
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
            'assessment_one' => ['nullable', 'numeric', 'min:0', 'max:10',],
            'assessment_two' => ['nullable', 'numeric', 'min:0', 'max:10',],
            'assessment_three' => ['nullable', 'numeric', 'min:0', 'max:10',],
            'assessment_four' => ['nullable', 'numeric', 'min:0', 'max:10',],
            'test_one' => ['nullable', 'numeric', 'min:0', 'max:20',],
            'test_two' => ['nullable', 'numeric', 'min:0', 'max:20',],
            'assignment_one' => ['nullable', 'numeric', 'min:0', 'max:5',],
            'assignment_two' => ['nullable', 'numeric', 'min:0', 'max:5',],
            'assignment_three' => ['nullable', 'numeric', 'min:0', 'max:5',],
            'assignment_four' => ['nullable', 'numeric', 'min:0', 'max:5',],
            'exam' => ['nullable', 'numeric', 'min:0', 'max:100',],
        ];
    }
}
