<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    protected $fillable = [
        'total_users',
        'total_earnings',
        'total_withdrawals',
        'expected_earnings',
        'total_loan_applications',
        'total_loans_given',
    ];
}
