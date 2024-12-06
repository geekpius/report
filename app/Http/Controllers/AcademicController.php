<?php

namespace App\Http\Controllers;

use App\Http\Actions\Academic\StoreAcademicAction;
use App\Http\Actions\Academic\UpdateAcademicAction;
use App\Http\Actions\Academic\ViewAcademicAction;
use App\Http\Requests\AcademicRequest;
use App\Models\Academic;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class AcademicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ViewAcademicAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AcademicRequest $request, StoreAcademicAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Academic $academic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Academic $academic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AcademicRequest $request, Academic $academic, UpdateAcademicAction $action): RedirectResponse
    {
        return $action->handle($request, $academic);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Academic $academic)
    {
        //
    }
}
