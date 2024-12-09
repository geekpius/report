<?php

namespace App\Http\Actions\Academic;

use Inertia\Inertia;
use Inertia\Response;

class CreateAcademicAction
{
    public function handle(): Response
    {
        return Inertia::render('Academic/CreateOrUpdate');
    }

}
