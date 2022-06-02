<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CrudController extends Controller
{
    public function index()
    {
        Inertia::render('Admin/Crud');
    }
}
