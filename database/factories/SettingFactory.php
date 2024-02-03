<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SettingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'show_position' => true,
            'school_name' => 'awisa methodist junior high school',
            'school_postal' => 'P.O. Box 11, Akim Awisa',
            'motto' => 'Knowledge and Service',
            'school_phone' => '0000000000',
        ];
    }
}
