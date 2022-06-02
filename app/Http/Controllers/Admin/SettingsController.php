<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Settings');
    }

    public function update(Request $request)
    {
        $fields = $request->validate([
            'contact' => 'required|max:20',
            'interest' => 'required',
            'misce_expenses' => 'required',
            'minimum_savings' => 'required',
            'credit_score_deductions' => 'required'
        ]);

        Setting::where('id', '1')->update([
            'interest' => $request->input('interest'),
            'contact' => $request->input('contact'),
            'misce_expenses' => $request->input('misce_expenses'),
            'minimum_savings' => $request->input('minimum_savings'),
            'credit_score_deductions' => $request->input('credit_score_deductions'),
        ]);

        return redirect('admin');
    }
}
