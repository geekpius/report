<?php

namespace App\Http\Actions\Student;

use App\Http\Requests\StudentStatusUpdateRequest;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateStatusAction
{
    public function handle(StudentStatusUpdateRequest $request, Student $student): RedirectResponse
    {
        $student->update($request->validated());
        session()->flash('success', 'Student status updated successfully');
        return Redirect::route('student');
    }

}
