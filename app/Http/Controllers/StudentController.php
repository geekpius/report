<?php

namespace App\Http\Controllers;

use App\Http\Actions\Student\CreateStudentAction;
use App\Http\Actions\Student\StoreStudentAction;
use App\Http\Actions\Student\UpdateStatusAction;
use App\Http\Actions\Student\ViewStudentAction;
use App\Http\Requests\StudentRequest;
use App\Http\Requests\StudentStatusUpdateRequest;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ViewStudentAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateStudentAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request, StoreStudentAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    public function updateStatus(StudentStatusUpdateRequest $request, Student $student, UpdateStatusAction $action): RedirectResponse
    {
        return $action->handle($request, $student);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
