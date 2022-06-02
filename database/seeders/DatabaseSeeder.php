<?php

namespace Database\Seeders;

use App\Models\Setting;
use App\Models\Statistic;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)->hasRoles(1)->hasApplication(3)->create();

        Setting::create([
            'contact' => '+254 758 153416',
            'interest' => 0.042,
            'misce_expenses' => 4,
            'credit_score_deductions' => 3,
            'minimum_savings' => 20,
        ]);

        Statistic::create([
            'total_users' => 300,
            'total_earnings' => 29292,
            'total_withdrawals' => 5353553,
            'expected_earnings' => 53535,
            'total_loan_applications' => 3553,
            'total_loans_given' => 66337,
        ]);
    }
}
