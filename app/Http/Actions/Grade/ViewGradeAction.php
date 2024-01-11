<?php

namespace App\Http\Actions\Grade;

use App\Http\Resources\GradeResource;
use App\Models\Grade;
use Inertia\Inertia;
use Inertia\Response;

class ViewGradeAction
{
    public function handle(): Response
    {
        return Inertia::render('Grade/View', [
            'grades' => GradeResource::collection(Grade::all()),
        ]);
    }

}
