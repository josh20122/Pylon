<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RolesController extends Controller
{
    public function index($id)
    {
        $user = User::find($id);

        return  Inertia::render('Admin/User/ShowRoles', [
            'roles' => $user->roles
        ]);
    }

    public function update($id)
    {
        $user = User::find($id);

        return Inertia::render('Admin/User/UpdateRoles', [
            'roles' => $user->roles
        ]);
    }

    public function put($id)
    {
        Role::where('user_id', $id)->update([
            'can_refer' => request()->input('canrefer'),
            'is_admin' => request()->input('isadmin'),
            'is_super_admin' => request()->input('issuperadmin'),
        ]);

        return redirect()->route('showRoles', [
            'id' => $id
        ]);
    }
}
