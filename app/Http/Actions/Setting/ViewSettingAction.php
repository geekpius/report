<?php

namespace App\Http\Actions\Setting;

use App\Http\Resources\SettingResource;
use App\Models\Setting;
use Inertia\Inertia;
use Inertia\Response;

class ViewSettingAction
{
    public function handle(): Response
    {
        return Inertia::render('Setting/CreateOrUpdate', [
            'settings' => new SettingResource(Setting::query()->first()),
        ]);
    }

}
