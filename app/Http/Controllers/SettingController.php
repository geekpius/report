<?php

namespace App\Http\Controllers;

use App\Http\Actions\Setting\StoreSettingAction;
use App\Http\Actions\Setting\ViewSettingAction;
use App\Http\Requests\SettingRequest;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Response;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(ViewSettingAction $action): Response
    {
        return $action->handle();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SettingRequest $request, StoreSettingAction $action): \Illuminate\Http\RedirectResponse
    {
        return $action->handle($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
