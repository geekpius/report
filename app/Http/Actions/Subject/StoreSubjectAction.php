<?php

namespace App\Http\Actions\Subject;

use App\Http\Requests\SubjectRequest;
use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class StoreSubjectAction
{
    public function handle(SubjectRequest $request): RedirectResponse
    {
        Subject::create($request->validated());
        return Redirect::route('subject');
    }

}
