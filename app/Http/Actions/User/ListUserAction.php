<?php

namespace App\Http\Actions\User;

use App\Http\Resources\LevelResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\SubjectResource;
use App\Http\Resources\UserResource;
use App\Models\Level;
use App\Models\Role;
use App\Models\Subject;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ListUserAction
{
    public function handle(): Response
    {
        return Inertia::render('User/View', [
            'users' => UserResource::collection(User::orderBy('name')->with('roles')->get()),
            'roles' => RoleResource::collection(Role::all()),
            'levels' => LevelResource::collection(Level::all()),
            'subjects' => SubjectResource::collection(Subject::all()),
        ]);
    }

}
