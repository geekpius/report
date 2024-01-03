<?php

namespace App\Http\Actions\Subject;

use App\Http\Resources\LevelResource;
use App\Models\Level;
use Inertia\Inertia;
use Inertia\Response;

class CreateSubjectAction
{
    public function handle(): Response
    {
        return Inertia::render('Subject/CreateOrUpdate');
    }

}
