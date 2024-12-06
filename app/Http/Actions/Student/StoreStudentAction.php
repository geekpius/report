<?php

namespace App\Http\Actions\Student;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class StoreStudentAction
{
    public function handle(StudentRequest $request): RedirectResponse
    {
        Student::create($request->validated());
        session()->flash('success', 'Student created successfully');
        return Redirect::route('student');
    }

}
