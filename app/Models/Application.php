<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Application extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'firstname',
        'middlename',
        'lastname',
        'gender',
        'email',
        'id_number',
        'date_of_birth',
        'phone_number',
        'county',
        'constituency',
        'ward',
        'address',
        'city',
        'employment_status',
        'loan_purpose',
        'income_range',
        'loan_amount',
        'interest',
        'number_of_months',
        'total_repayments',
        'monthly_installments',
        'total_loan_interests',
        'has_other_loans',
        'know_about_us',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->hasOne(ApplicationStatus::class);
    }
}
