<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepositedController extends Controller
{
    public function index(Request $request)
    {


        $filter = $request->input('search');


        $user = Role::query()->when($request->input('filter') == 'deposited', function ($query) {
            $query->where('has_deposited', true)->with('user');
        })
            ->when($request->input('filter') == 'pending_loan', function ($query, $search) {
                $query->where('has_pending_loan', true)->with('user');
            })
            ->when($request->input('filter') == 'has_other_loans', function ($query, $search) {
                $query->where('has_other_loans', true)->with('user');
            })
            ->when($request->input('filter') == 'has_crb', function ($query, $search) {
                $query->where('has_crb', true)->with('user');
            })
            ->when($request->input('filter') == 'is_admin', function ($query) {
                $query->where('is_admin', true)->with('user');
            })
            ->when($request->input('filter') == 'is_super_admin', function ($query) {
                $query->where('is_super_admin', true)->with('user');
            })
            ->when($request->input('filter') == 'is_guest', function ($query) {
                $query->where('is_guest', true)->with('user');
            })->when(!$request->input('filter'), function ($query, $search) {
                $query->with('user');
            })

            ->orderBy('created_at', 'DESC')->paginate()->withQueryString();

        # code...



        return Inertia::render('Admin/Deposited', [
            'users' => $user,
            'filters' => $request->input('search'),

        ]);
    }
}
