<?php

namespace App\Http\Controllers;

use App\Http\Actions\Assessment\ViewSBAAction;
use Illuminate\Http\Request;
use Inertia\Response;

class AssessmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function SBAIndex(Request $request, ViewSBAAction $action): Response
    {
        return $action->handle($request);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeSBA(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
