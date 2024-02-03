<?php

namespace App\Http\Controllers;

use App\Http\Actions\Assessment\CreateAssessmentAction;
use App\Http\Actions\Assessment\StoreAssessmentAction;
use App\Http\Actions\Assessment\StoreMarkAction;
use App\Http\Actions\Assessment\ViewAllMarksAction;
use App\Http\Actions\Assessment\ViewAssessmentsAction;
use App\Http\Actions\Assessment\ViewMarkAction;
use App\Http\Requests\AssessmentRequest;
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


    public function create(Request $request, CreateAssessmentAction $action): Response
    {
        return $action->handle($request);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AssessmentRequest $request, StoreAssessmentAction $action): RedirectResponse
    {
        return $action->handle($request);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function storeMark(MarkRequest $request, StoreMarkAction $action): RedirectResponse
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
