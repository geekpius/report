<?php

namespace App\Http\Actions\Assessment;

use App\Events\MarkEvent;
use App\Http\Requests\GradeRequest;
use App\Http\Requests\MarkRequest;
use App\Models\Academic;
use App\Models\Grade;
use App\Models\Mark;
use App\Models\Overall;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;

class StoreMarkAction
{
    public function handle(MarkRequest $request): RedirectResponse
    {
        try{
            $academic = Academic::query()->latest()->first();
            $grade = Grade::query()->where('low', '<=', $request->exam)
                ->where('high', '>=', $request->exam)->first();

            $mark = Mark::query()->updateOrCreate(
                ['student_id' => $request->student_id, 'year'=>$academic->year, 'term'=>$academic->term],
                [...$request->validated(), ...['year'=>$academic->year, 'term'=>$academic->term, 'remark'=>$grade->remark,
                    'assessment_sub_total' => $this->getAssessmentSubTotal($request), 'test_sub_total' => $this->getTestSubTotal($request),
                    'assignment_sub_total' => $this->getAssignmentSubTotal($request),
                    ],
                ],
            );

            event(new MarkEvent($mark, $academic, $request));

            session()->flash('success', $mark->student->name.' marks assessment created successfully.');

            return redirect()->route('mark', parameters: ['level' => $request->form, 'subject'=>$request->subject]);
        }catch (\Exception $exception){
            report($exception);
            session()->flash('success', 'Something went wrong');

            return redirect()->back();
        }
    }

    private function getAssessmentSubTotal(MarkRequest $request): float
    {
        return $request->assessment_one + $request->assessment_two + $request->assessment_three
            + $request->assessment_four;
    }

    private function getTestSubTotal(MarkRequest $request): float
    {
        return $request->test_one + $request->test_two;
    }

    private function getAssignmentSubTotal(MarkRequest $request): float
    {
        return $request->assignment_one + $request->assignment_two + $request->assignment_three + $request->assignment_four;
    }

}
