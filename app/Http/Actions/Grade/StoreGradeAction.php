<?php

namespace App\Http\Actions\Grade;

use App\Http\Requests\GradeRequest;
use App\Models\Grade;
use Illuminate\Http\RedirectResponse;

class StoreGradeAction
{
    public function handle(GradeRequest $request): RedirectResponse
    {
        Grade::create($request->validated());
        return redirect()->route('grade');
    }

}
