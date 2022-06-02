<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RefController extends Controller
{
    public function index()
    {
        return Inertia::render('Views/DashboardRefs');
    }
}
