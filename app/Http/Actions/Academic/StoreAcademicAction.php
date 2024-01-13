<?php

namespace App\Http\Actions\Academic;

use App\Http\Requests\AcademicRequest;
use App\Models\Academic;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class StoreAcademicAction
{
    public function handle(AcademicRequest $request): RedirectResponse
    {
        Academic::create($request->validated());
        session()->flash('success', 'Academic created');
        return Redirect::route('academic');
    }

}
