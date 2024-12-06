<?php

namespace App\Http\Actions\Student;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateStudentAction
{
    public function handle(StudentRequest $request, Student $student): RedirectResponse
    {
       $student->update($request->validated());
        session()->flash('success', 'Student updated successfully');
        return Redirect::route('student');
    }

}
