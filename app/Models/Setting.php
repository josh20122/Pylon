<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'interest',
        'contact',
        'misce_expenses',
        'credit_score_deductions',
        'minimum_savings'
    ];
}
