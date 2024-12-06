<?php

namespace App\Http\Actions\Setting;

use App\Http\Requests\SettingRequest;
use App\Models\Setting;
use Illuminate\Http\RedirectResponse;

class StoreSettingAction
{
    public function handle(SettingRequest $request): RedirectResponse
    {
        $settings = Setting::query()->first();
        if($settings){
            $settings->update($request->validated());
        }else{
            Setting::query()->create($request->validated());
        }
        session()->flash('success', 'Settings updated successfully.');

        return redirect()->route('setting');
    }

}
