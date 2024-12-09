<?php

namespace App\Http\Actions\Assessment;

use App\Events\MarkEvent;
use App\Http\Requests\MarkRequest;
use App\Models\Academic;
use App\Models\Grade;
use App\Models\Mark;
use Illuminate\Http\RedirectResponse;

class StoreMarkAction
{
    public function handle(MarkRequest $request): RedirectResponse
    {
        try{
            $academic = Academic::query()->latest()->first();
            $grade = Grade::query()->where('low', '<=', ($request->exam ?? 0))
                ->where('high', '>=', ($request->exam ?? 0))->first();

            $mark = Mark::query()->updateOrCreate(
                ['student_id' => $request->student_id, 'year'=>$academic->year, 'term'=>$academic->term],
                [...$request->validated(), ...['year'=>$academic->year, 'term'=>$academic->term, 'remark'=>$grade?->remark,
                    'assessment_sub_total' => $this->getAssessmentSubTotal($request), 'test_sub_total' => $this->getTestSubTotal($request),
                    'assignment_sub_total' => $this->getAssignmentSubTotal($request),
                    ],
                ],
            );

            event(new MarkEvent($mark, $academic, $request));

            session()->flash('success', ucwords($mark->student->surname).' marks assessment updated successfully.');

            return redirect()->route('mark', parameters: ['level' => $request->form, 'subject'=>$request->subject]);
        }catch (\Exception $exception){
            report($exception);
            session()->flash('success', 'Something went wrong'.$exception->getMessage());

            return redirect()->back();
        }
    }

    private function getAssessmentSubTotal(MarkRequest $request): float
    {
        return ($request->assessment_one ?? 0) + ($request->assessment_two ?? 0) + ($request->assessment_three ?? 0)
            + ($request->assessment_four ?? 0);
    }

    private function getTestSubTotal(MarkRequest $request): float
    {
        return ($request->test_one ?? 0) + ($request->test_two ?? 0);
    }

    private function getAssignmentSubTotal(MarkRequest $request): float
    {
        return ($request->assignment_one ?? 0) + ($request->assignment_two ?? 0) + ($request->assignment_three ?? 0) + ($request->assignment_four ?? 0);
    }

}
