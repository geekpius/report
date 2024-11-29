<?php

namespace App\Http\Actions\User;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class StoreUserAction
{
    public function handle(UserRequest $request): RedirectResponse
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $user->roles()->sync($request->roles);

        if(!empty($request->levels) && count($request->levels) > 0){
            for($i = 0; $i < count($request->levels); $i++){
                $user->classTeachers()->create([
                    'user_id' => $user->id,
                    'level_id' => $request->levels[$i],
                ]);
            }
        }

        if(!empty($request->subjects) && count($request->subjects) > 0){
            for($i = 0; $i < count($request->subjects); $i++){
                $user->subjectTeachers()->create([
                    'user_id' => $user->id,
                    'subject_id' => $request->subjects[$i],
                ]);
            }
        }

        session()->flash('success', 'User created');
        return Redirect::route('users');
    }

}
