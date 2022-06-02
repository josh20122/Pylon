<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%')->orwhere('phone_number', 'like', '%' . $search . '%')
                    ->orwhere('email', 'like', '%' . $search . '%');
            })
            ->orderBy('id', 'DESC')
            ->paginate(20)
            ->withQueryString();
        return Inertia::render('Admin/Users', [
            'users' => $users,
            'filters' => $request->only('search')
        ]);
        # code...
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);
        // dd($user->roles);
        return Inertia::render('Admin/User/AllDetails', [
            'user' => $user,
            'roles' => $user->roles
        ]);
    }
}
