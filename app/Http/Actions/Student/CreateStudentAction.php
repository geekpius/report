<?php

namespace App\Http\Actions\Student;

use App\Http\Resources\LevelResource;
use App\Models\Level;
use Inertia\Inertia;
use Inertia\Response;

class CreateStudentAction
{
    public function handle(): Response
    {
        return Inertia::render('Student/CreateOrUpdate', [
            'levels' => LevelResource::collection(Level::all())
        ]);
    }

}
