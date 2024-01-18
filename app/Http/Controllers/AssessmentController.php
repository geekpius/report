<?php

namespace App\Http\Controllers;

use App\Http\Actions\Assessment\StoreSBAAction;
use App\Http\Actions\Assessment\ViewAllMarksAction;
use App\Http\Actions\Assessment\ViewAssessmentsAction;
use App\Http\Actions\Assessment\ViewMarkAction;
use App\Http\Requests\MarkRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class AssessmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, ViewAssessmentsAction $action): Response
    {
        return $action->handle($request);
    }

    /**
     * Display a listing of the resource.
     */
    public function markIndex(Request $request, ViewMarkAction $action): Response
    {
        return $action->handle($request);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeMark(MarkRequest $request, StoreSBAAction $action): RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function viewAll(Request $request, ViewAllMarksAction $action): Response
    {
        return $action->handle($request);
    }

}
