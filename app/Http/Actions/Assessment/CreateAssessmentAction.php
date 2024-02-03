<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\AcademicResource;
use App\Http\Resources\LevelResource;
use App\Http\Resources\StudentAssessmentResource;
use App\Models\Academic;
use App\Models\Level;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CreateAssessmentAction
{
    public function handle(Request $request): Response
    {
        $academic = Academic::query()->latest()->first();
        return Inertia::render('Assessment/CreateView', [
            'levels' => LevelResource::collection(Level::all()),
            'students' => StudentAssessmentResource::collection(Student::where('students.form', $request->level)
                ->leftJoin('assessments', function ($join) use ($academic) {
                    $join->on('students.id', '=', 'assessments.student_id')
                        ->where('assessments.year', $academic->year)->where('assessments.term', $academic->term);
                })
                ->select('students.id', 'students.number', 'students.name', 'students.gender',
                    'assessments.year', 'assessments.term', 'assessments.level', 'assessments.number_in_class',
                'assessments.attendance', 'assessments.promoted', 'assessments.conduct', 'assessments.attitude',
                'assessments.interest', 'assessments.remark')->get()
            ),
            'academic' => new AcademicResource($academic),
        ]);
    }

}
