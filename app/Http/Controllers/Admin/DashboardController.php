<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Statistic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $data = Statistic::find(1);
        return Inertia::render('Admin/Dashboard', [
            'stats' => $data
        ]);
    }
}
