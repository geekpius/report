<?php

namespace App\Http\Actions\Assessment;

use App\Http\Requests\GradeRequest;
use App\Http\Requests\MarkRequest;
use App\Models\Academic;
use App\Models\Grade;
use App\Models\Mark;
use Illuminate\Http\RedirectResponse;

class StoreSBAAction
{
    public function handle(MarkRequest $request): RedirectResponse
    {
        $academic = Academic::query()->latest()->first();
        $grade = Grade::query()->where('low', '<=', $request->exam)
            ->where('high', '>=', $request->exam)->first();
        $mark = Mark::query()->updateOrCreate(
            ['student_id' => $request->student_id],
            [...$request->validated(), ...['year'=>$academic->year, 'term'=>$academic->term, 'remark'=>$grade->remark,]],
        );
        session()->flash('success', $mark->student->name.' SBA assessment created');

        return redirect()->route('mark', parameters: ['level' => $request->form, 'subject'=>$request->subject]); // ?level=Form%201&subject=ENGLISH%20LANGUAGE
    }

}
