<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\LevelResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\SubjectResource;
use App\Models\Level;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSBAAction
{
    public function handle(Request $request): Response
    {
        return Inertia::render('Assessment/SBAView', [
            'levels' => LevelResource::collection(Level::all()),
            'subjects' => SubjectResource::collection(Subject::with('levels')->get()),
            'students' => StudentResource::collection(Student::where('form', $request->level)
                ->where('status', Student::ACTIVE)->orderBy('name', 'ASC')->get()),
        ]);
    }

}
