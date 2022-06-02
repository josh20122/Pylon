<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ApplicationCrudController;
use App\Http\Controllers\Admin\CrudController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepositedController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\PendingPaymentController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('admin.home');


Route::get('/deposited', [DepositedController::class, 'index']);

Route::get('/settings', [SettingsController::class, 'index'])->name('settings');

Route::post('/settings', [SettingsController::class, 'update']);

Route::get('/pending', [PendingPaymentController::class, 'index']);


Route::prefix('/crud')->group(function () {
    Route::get('/all', [AdminController::class, 'index']);
    Route::get('/user/{id}', [AdminController::class, 'show']);
    Route::get('/user/{id}/applications', [ApplicationCrudController::class, 'index']);
    Route::delete('/user/{id}/applications/{application}', [ApplicationCrudController::class, 'destroy']);
    Route::get('/user/{id}/applications/{application}', [ApplicationCrudController::class, 'show']);
    Route::get('/user/{id}/roles', [RolesController::class, 'index'])->name('showRoles');
    Route::get('/user/{id}/roles/update', [RolesController::class, 'update']);
    Route::put('/user/{id}/roles/update', [RolesController::class, 'put']);
});
