<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RefController;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {


    return Inertia::render('Views/Home');
})->name('home');

Route::get('/ref', [RefController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'contact']);


Route::get('/application', [ApplicationController::class, 'index']);

Route::post('/application', [ApplicationController::class, 'create']);

Route::get('faq', function () {
    return Inertia::render('Views/FAQ');
});

Route::get('/dashboard', [DashboardController::class, 'index']);


Route::get('test', function () {
    // Auth::loginUsingId(16, $remember = true);
    // dd(Auth::user()->id);

    if (request()->query('ref')) {
        Cookie::queue('new', request()->query('ref'), 5);
    }

    if (Cookie::get('ref')) {
        dd('success');
    }




    return Cookie::get('new');
})->middleware('auth');


Route::get('/referals', [RefController::class, 'index']);
