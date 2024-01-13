<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\LevelResource;
use App\Http\Resources\StudentResource;
use App\Models\Level;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewSBAAction
{
    public function handle(Request $request): Response
    {
        return Inertia::render('Assessment/SBAView', [
            'levels' => LevelResource::collection(Level::all()),
            'students' => StudentResource::collection(Student::where('form', $request->level)
                ->where('status', Student::ACTIVE)->orderBy('name', 'ASC')->get()),
        ]);
    }

}
