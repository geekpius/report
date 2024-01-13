<?php

namespace App\Http\Actions\Dashboard;

use App\Http\Resources\AcademicResource;
use App\Models\Academic;
use App\Models\Student;
use App\Models\Subject;
use Inertia\Inertia;
use Inertia\Response;

class ViewDashboardAction
{
    public function handle(): Response
    {
        return Inertia::render('Dashboard', [
            'academic' => new AcademicResource(Academic::query()->latest()->first()),
            'statistics' => [
                'studentCount' => Student::count(),
                'activeStudentCount' => Student::where('status', Student::ACTIVE)->count(),
                'droppedOutStudentCount' => Student::where('status', Student::DROPPED_OUT)->count(),
                'completedStudentCount' => Student::where('status', Student::COMPLETED)->count(),
                'subjectCount' => Subject::count(),
            ]
        ]);
    }

}
