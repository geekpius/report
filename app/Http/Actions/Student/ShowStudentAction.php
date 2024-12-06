<?php

namespace App\Http\Actions\Student;

use App\Http\Resources\LevelResource;
use App\Models\Level;
use App\Models\Student;
use Inertia\Inertia;
use Inertia\Response;

class ShowStudentAction
{
    public function handle(Student $student): Response
    {
        return Inertia::render('Student/CreateOrUpdate', [
            'levels' => LevelResource::collection(Level::all()),
            'student' => $student,
        ]);
    }

}
