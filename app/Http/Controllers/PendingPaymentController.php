<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendingPaymentController extends Controller
{
    public function index(Request $request)
    {
        $users = Role::query()
            ->when($request->input('search'), function ($query, $search) {
                $query->whereRelation('user', 'phone_number', 'like', '%' . $search . '%')->with('user');
            })
            ->when(!$request->input('search'), function ($query, $search) {
                $query->where('has_pending_loan', true)->with('user');
            })
            ->orderBy('id', 'DESC')
            ->paginate(15)
            ->withQueryString();




        return Inertia::render('Admin/PendingPayment', [
            'users' => $users,
            'filters' => $request->query('search')
        ]);
    }
}
