<?php

namespace App\Http\Actions\Subject;

use App\Http\Resources\SubjectResource;
use App\Models\Subject;
use Inertia\Inertia;
use Inertia\Response;

class ViewSubjectAction
{
    public function handle(): Response
    {
        return Inertia::render('Subject/View', [
            'subjects' => SubjectResource::collection(Subject::all()),
        ]);
    }

}
