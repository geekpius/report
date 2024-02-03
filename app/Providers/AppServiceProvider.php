<?php

namespace App\Providers;

use App\Models\Mark;
use App\Models\Student;
use App\Observers\MarkObserver;
use App\Observers\StudentObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Student::observe(StudentObserver::class);
        Mark::observe(MarkObserver::class);
    }
}
