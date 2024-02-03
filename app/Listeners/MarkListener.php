<?php

namespace App\Listeners;

use App\Events\MarkEvent;
use App\Models\Mark;
use App\Models\Overall;
use App\Models\Setting;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

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
        $sbaPercent = ($settings->sba_percent*($mark->assessment_sub_total+$mark->test_sub_total+$mark->assignment_sub_total));
        $examPercent = ($settings->exam_percent*$mark->exam);

        $mark->update([
            'sba_percent' => $sbaPercent,
            'exam_percent' => $examPercent,
            'total' => ($sbaPercent+$examPercent),
        ]);

        $overallMarks = Mark::query()->where('student_id', $request->student_id)->where('year', $academic->year)
            ->where('term', $academic->term)->sum('total');

        Overall::query()->updateOrCreate(
            ['student_id' => $request->student_id, 'year'=>$academic->year, 'term'=>$academic->term],
            ['form'=> $mark->form, 'year'=>$academic->year, 'term'=>$academic->term, 'total'=>$overallMarks, 'position'=>0],
        );
    }
}
