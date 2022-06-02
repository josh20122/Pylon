<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index()
    {
        return Inertia::render('Application/Index');
    }
    public function create(Request $request)
    {

        Application::create([
            'firstname' => $request->input('firstname'),
            'middlename' => $request->input('middlename'),
            'lastname' => $request->input('lastname'),
            'gender' => $request->input('gender'),
            'email' => $request->input('email'),
            'id_number' => $request->input('idnumber'),
            'date_of_birth' => $request->input('dob'),
            'phone_number' => $request->input('phone'),
            'county' => $request->input('county'),
            'constituency' => $request->input('constituency'),
            'ward' => $request->input('ward'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'employment_status' => $request->input('status'),
            'loan_purpose' => $request->input('purpose'),
            'income_range' => $request->input('income'),
            'loan_amount' => $request->input('loanAmount'),
            'interest' => $request->input('interest'),
            'number_of_months' => $request->input('month'),
            'total_repayments' => $request->input('totalRepayment'),
            'monthly_installments' => $request->input('monthlyInstallments'),
            'total_loan_interests' => $request->input('totaLoanInterest'),
            'has_other_loans' => $request->input('otherLoans'),
            'know_about_us' => $request->input('AboutUs')
        ]);

        return redirect()->route('dashboard');
    }
}
