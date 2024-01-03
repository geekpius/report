<?php

namespace App\Http\Actions\Student;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Inertia\Inertia;
use Inertia\Response;

class ViewStudentAction
{
    public function handle(): Response
    {
        return Inertia::render('Student/View', [
            'students' => StudentResource::collection(Student::all()),
        ]);
    }

}
