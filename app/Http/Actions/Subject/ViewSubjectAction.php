<?php

namespace App\Http\Actions\Subject;

use App\Http\Resources\LevelResource;
use App\Http\Resources\SubjectResource;
use App\Models\Level;
use App\Models\Subject;
use Inertia\Inertia;
use Inertia\Response;

class ViewSubjectAction
{
    public function handle(): Response
    {
        return Inertia::render('Subject/View', [
            'subjects' => SubjectResource::collection(Subject::with('levels')->get()),
            'levels' => LevelResource::collection(Level::all()),
        ]);
    }

}
