<?php

namespace App\Http\Controllers;

use App\Http\Actions\Grade\StoreGradeAction;
use App\Http\Actions\Grade\ViewGradeAction;
use App\Http\Requests\GradeRequest;
use App\Models\Grade;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ViewGradeAction $action): Response
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
    public function store(GradeRequest $request, StoreGradeAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Grade $grade)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Grade $grade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Grade $grade)
    {
        //
    }
}
