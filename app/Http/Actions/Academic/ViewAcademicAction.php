<?php

namespace App\Http\Actions\Academic;

use App\Http\Resources\AcademicResource;
use App\Models\Academic;
use Inertia\Inertia;
use Inertia\Response;

class ViewAcademicAction
{
    public function handle(): Response
    {
        return Inertia::render('Academic/View', [
            'academics' => AcademicResource::collection(Academic::all()),
        ]);
    }

}
