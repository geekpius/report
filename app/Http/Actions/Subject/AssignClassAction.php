<?php

namespace App\Http\Actions\Subject;

use App\Http\Requests\AssignClassRequest;
use App\Models\Level;
use App\Models\Subject;
use Illuminate\Http\RedirectResponse;

class AssignClassAction
{
    public function handle(AssignClassRequest $request): RedirectResponse
    {
        $subject = Subject::find($request->subject_id);
        $levels = Level::find($request->form_ids);
        $subject->levels()->sync($levels);

        return redirect()->route('subject');
    }

}
