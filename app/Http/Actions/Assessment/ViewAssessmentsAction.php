<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\AssessmentResource;
use App\Http\Resources\LevelResource;
use App\Http\Resources\MarkResource;
use App\Http\Resources\SubjectResource;
use App\Models\Academic;
use App\Models\Assessment;
use App\Models\Level;
use App\Models\Mark;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewAssessmentsAction
{
    public function handle(Request $request): Response
    {
        $academic = Academic::query()->latest()->first();
        return Inertia::render('Assessment/Assessments', [
            'levels' => LevelResource::collection(Level::all()),
            'assessments' => AssessmentResource::collection(Assessment::where('level', $request->level)
                ->where('year', $academic->year)->where('term', $academic->term)->with(['student'])->get()
            ),
        ]);
    }

}
