<?php

use App\Http\Controllers\AcademicController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
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


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');

    Route::middleware(['admin.route'])->group(function () {
        Route::prefix('users')->group(function (){
            Route::get('', [UserController::class, 'index'])->name('users');
            Route::post('/store', [UserController::class, 'store'])->name('users.store');
        });

        Route::prefix('academics')->group(function (){
            Route::get('', [AcademicController::class, 'index'])->name('academic');
            Route::get('/create', [AcademicController::class, 'create'])->name('academic.create');
            Route::post('/store', [AcademicController::class, 'store'])->name('academic.submit');
            Route::put('/{academic}/update', [AcademicController::class, 'update'])->name('academic.update');
        });

        Route::prefix('students')->group(function (){
            Route::get('', [StudentController::class, 'index'])->name('student');
            Route::get('/create', [StudentController::class, 'create'])->name('student.create');
            Route::post('/store', [StudentController::class, 'store'])->name('student.submit');
            Route::put('/{student}/update-status', [StudentController::class, 'updateStatus'])->name('student.update.status');
        });

        Route::prefix('subjects')->group(function (){
            Route::get('', [SubjectController::class, 'index'])->name('subject');
            Route::get('/create', [SubjectController::class, 'create'])->name('subject.create');
            Route::post('/store', [SubjectController::class, 'store'])->name('subject.submit');
            Route::post('/assign-class', [SubjectController::class, 'assignClass'])->name('subject.assign.class');
        });

        Route::prefix('grades')->group(function (){
            Route::get('', [GradeController::class, 'index'])->name('grade');
            Route::post('/store', [GradeController::class, 'store'])->name('grade.submit');
        });

        Route::get('/settings', [SettingController::class, 'create'])->name('setting');
        Route::post('/settings', [SettingController::class, 'store'])->name('setting.store');
    });


    Route::prefix('assessments')->group(function (){
        Route::get('', [AssessmentController::class, 'index'])->name('assessment');
        Route::post('store', [AssessmentController::class, 'store'])->name('assessment.store');
        Route::get('/create', [AssessmentController::class, 'create'])->name('assessment.create');
        Route::get('/marks', [AssessmentController::class, 'markIndex'])->name('mark');
        Route::post('/marks/store', [AssessmentController::class, 'storeMark'])->name('mark.submit');
        Route::get('/marks/all', [AssessmentController::class, 'viewAll'])->name('mark.all');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

Route::get('/migrations', function (){
    Artisan::call('migrate');
    Artisan::call('optimize:clear');
    return redirect('/');
});

Route::get('/seed', function (){
    Artisan::call('db:seed');
    Artisan::call('optimize:clear');
    return redirect('/');
});

require __DIR__.'/auth.php';
