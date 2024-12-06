<?php

namespace App\Http\Actions\Academic;

use App\Http\Requests\AcademicRequest;
use App\Models\Academic;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class UpdateAcademicAction
{
    public function handle(AcademicRequest $request, Academic $academic): RedirectResponse
    {
        $academic->update($request->validated());
        session()->flash('success', 'Academic updated successfully.');
        return Redirect::route('academic');
    }

}
