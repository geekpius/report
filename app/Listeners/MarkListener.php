<?php

namespace App\Listeners;

use App\Events\MarkEvent;
use App\Models\Grade;
use App\Models\Mark;
use App\Models\Overall;
use App\Models\Setting;

class MarkListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(MarkEvent $event): void
    {
        $mark = $event->mark;
        $academic = $event->academic;
        $request = $event->request;

        $settings = Setting::query()->first();
        $sbaPercent = ($settings->sba_percent*(($mark->assessment_sub_total ?? 0)+($mark->test_sub_total ?? 0)+($mark->assignment_sub_total ?? 0)));
        $examPercent = ($settings->exam_percent*($mark->exam ?? 0));
        $total = ($sbaPercent+$examPercent);

        $grade = Grade::query()->where('low', '<=', $total)
            ->where('high', '>=', $total)->first();

        $mark->update([
            'remark' => $grade?->remark,
            'sba_percent' => $sbaPercent,
            'exam_percent' => $examPercent,
            'total' => $total,
        ]);

        $overallMarks = Mark::query()->where('student_id', $request->student_id)->where('year', $academic->year)
            ->where('term', $academic->term)->sum('total');

        Overall::query()->updateOrCreate(
            ['student_id' => $request->student_id, 'year'=>$academic->year, 'term'=>$academic->term],
            ['form'=> $mark->form, 'year'=>$academic->year, 'term'=>$academic->term, 'total'=>$overallMarks, 'position'=>0],
        );
    }
}
