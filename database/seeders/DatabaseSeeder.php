<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         \App\Models\User::factory(1)->create();
         \App\Models\Setting::factory(1)->create();
         \App\Models\Academic::factory(1)->create();
         \App\Models\Level::factory()->create([
             'name' => 'BS 7'
         ]);

        \App\Models\Level::factory()->create([
            'name' => 'BS 8'
        ]);

        \App\Models\Level::factory()->create([
            'name' => 'BS 9'
        ]);

        \App\Models\Role::factory()->create([
            'name' => 'admin'
        ]);

        \App\Models\Role::factory()->create([
            'name' => 'admin'
        ]);

        \App\Models\Role::factory()->create([
            'name' => 'subject teacher'
        ]);

        \App\Models\Role::factory()->create([
            'name' => 'class teacher'
        ]);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
