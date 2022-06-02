<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationCrudController extends Controller
{
    public function index($id)
    {
        $applications = User::find($id);
        return Inertia::render('Admin/User/AllApplications', [
            'applications' => $applications->application,
        ]);
    }
    public function destroy($id, $application)
    {
        Application::findOrFail($application)->delete();

        return back();
    }
    public function show($id, $application)
    {
        return Inertia::render('Admin/User/ShowApplication', [
            'application' => Application::find($application),
        ]);
    }
}
