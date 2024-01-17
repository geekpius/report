<?php

namespace App\Http\Actions\Assessment;

use App\Http\Resources\LevelResource;
use App\Http\Resources\MarkResource;
use App\Http\Resources\SubjectResource;
use App\Models\Academic;
use App\Models\Level;
use App\Models\Mark;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ViewAllMarksAction
{
    public function handle(Request $request): Response
    {
        $academic = Academic::query()->latest()->first();
        return Inertia::render('Assessment/AllMarksView', [
            'levels' => LevelResource::collection(Level::all()),
            'subjects' => SubjectResource::collection(Subject::with('levels')->get()),
            'marks' => MarkResource::collection(Mark::where('form', $request->level)
                ->where('subject', $request->subject)->where('year', $academic->year)
                ->where('term', $academic->term)->with(['student'])->get()
            ),
        ]);
    }

}
