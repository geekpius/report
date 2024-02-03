<?php

namespace App\Http\Actions\Assessment;

use App\Http\Requests\AssessmentRequest;
use App\Models\Assessment;
use Illuminate\Http\RedirectResponse;

class StoreAssessmentAction
{
    public function handle(AssessmentRequest $request): RedirectResponse
    {
        $assessment = Assessment::query()->updateOrCreate(
            ['student_id' => $request->student_id, 'year'=>$request->year, 'term'=>$request->term],
            [...$request->validated()],
        );
        session()->flash('success', $assessment->student->name.' assessment created');

        return redirect()->route('assessment.create', parameters: ['level' => $request->level]);
    }

}
