<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\AssessmentResource;
use App\Http\Resources\LevelResource;
use App\Models\Academic;
use App\Models\Assessment;
use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ViewAssessmentsAction
{
    public function handle(Request $request): Response
    {
        $academic = Academic::query()->latest()->first();
        $classTeachers = Auth::user()->classTeachers;
        $levels = $classTeachers->load('level');

        return Inertia::render('Assessment/Assessments', [
            'levels' => $classTeachers->count() > 0 ? LevelResource::collection($levels->pluck('level')) : LevelResource::collection(Level::all()),
            'assessments' => AssessmentResource::collection(Assessment::where('level', $request->level)
                ->where('year', $academic->year)->where('term', $academic->term)->with(['student'])->get()
            ),
        ]);
    }

}
