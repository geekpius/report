<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\LevelResource;
use App\Http\Resources\StudentMarkResource;
use App\Http\Resources\SubjectResource;
use App\Models\Academic;
use App\Models\Level;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ViewMarkAction
{
    public function handle(Request $request): Response
    {
        $academic = Academic::query()->latest()->first();

        $subjectTeachers = Auth::user()->subjectTeachers;
        $subjects = $subjectTeachers->load('subject.levels');

        return Inertia::render('Assessment/MarkView', [
            'levels' => LevelResource::collection(Level::all()),
            'subjects' => $subjectTeachers->count() > 0 ?  SubjectResource::collection($subjects->pluck('subject')) : SubjectResource::collection(Subject::with('levels')->get()),
            'students' =>  StudentMarkResource::collection(Student::where('students.form', $request->level)
                ->leftJoin('marks', function ($join) use ($request, $academic) {
                    $join->on('students.id', '=', 'marks.student_id')
                        ->where('marks.subject', $request->subject)
                        ->where('marks.year', $academic->year)->where('marks.term', $academic->term);
                })
                ->select('students.id', 'students.number', 'students.surname', 'students.first_name', 'students.other_names',
                    'students.gender', 'marks.year', 'marks.term', 'marks.form', 'marks.subject', 'marks.assessment_one',
                    'marks.assessment_two', 'marks.assessment_three', 'marks.assessment_four', 'marks.test_one',
                    'marks.test_two', 'marks.assignment_one', 'marks.assignment_two', 'marks.assignment_three',
                    'marks.assignment_four', 'marks.exam')->get()
            ),
        ]);
    }

}
