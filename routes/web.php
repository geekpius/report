<?php

use App\Http\Controllers\AcademicController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::prefix('academics')->group(function (){
        Route::get('', [AcademicController::class, 'index'])->name('academic');
        Route::get('/create', [AcademicController::class, 'create'])->name('academic.create');
        Route::post('/store', [AcademicController::class, 'store'])->name('academic.submit');
    });

    Route::prefix('students')->group(function (){
        Route::get('', [StudentController::class, 'index'])->name('student');
        Route::get('/create', [StudentController::class, 'create'])->name('student.create');
        Route::post('/store', [StudentController::class, 'store'])->name('student.submit');
    });

    Route::prefix('subjects')->group(function (){
        Route::get('', [SubjectController::class, 'index'])->name('subject');
        Route::get('/create', [SubjectController::class, 'create'])->name('subject.create');
        Route::post('/store', [SubjectController::class, 'store'])->name('subject.submit');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
