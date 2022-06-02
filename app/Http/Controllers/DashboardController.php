<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {


        printf(now()->subHours(20));
        $application = Application::where('user_id', 1)->with('status')->get();
        return Inertia::render('Views/Dashboard', [
            'application' => $application,
        ]);
    }
}
