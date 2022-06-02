<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Views/Contact');
    }

    public function contact(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:20',
            'email' => 'required|email|max:50|email',
            'subject' => 'required|min:8',
            'message' => 'required|min:8',
            'phone' => 'required'
        ]);
    }
}
