<?php

namespace App\Http\Controllers;

use App\Http\Actions\Subject\AssignClassAction;
use App\Http\Actions\Subject\CreateSubjectAction;
use App\Http\Actions\Subject\StoreSubjectAction;
use App\Http\Actions\Subject\ViewSubjectAction;
use App\Http\Requests\AssignClassRequest;
use App\Http\Requests\SubjectRequest;
use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(ViewSubjectAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateSubjectAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SubjectRequest $request, StoreSubjectAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function assignClass(AssignClassRequest $request, AssignClassAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        //
    }
}
