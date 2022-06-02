<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use phpDocumentor\Reflection\Types\This;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $employment = [
            'employed',
            'business',
            'self employed',
            'unemployed',
            'other',
            'student'
        ];
        $rand = array_rand($employment);

        $gender = [
            'male', 'female'
        ];
        $genderrand = array_rand($gender);


        return [
            'firstname' => $this->faker->firstName(),
            'middlename' => $this->faker->firstNameFemale(),
            'lastname' => $this->faker->lastName(),
            'gender' => $gender[$genderrand],
            'email' => $this->faker->unique()->safeEmail(),
            'id_number' => mt_rand(10000000, 99999999),
            'date_of_birth' => $this->faker->date,
            'phone_number' => mt_rand(254710000000, 254780000000),
            'county' => $this->faker->lastName(),
            'constituency' => $this->faker->city,
            'ward' => $this->faker->city(),
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'employment_status' => $employment[$rand],
            'loan_purpose' => $this->faker->randomDigitNotNull,
            'income_range' => $this->faker->buildingNumber,
            'loan_amount' => rand(10000, 150000),
            'interest' => 0.042,
            'number_of_months' => rand(3, 12),
            'total_repayments' => rand(20000, 200000),
            'monthly_installments' => rand(2000, 10000),
            'total_loan_interests' => rand(20000, 2222222),
            'has_other_loans' => 'NO',
            'know_about_us' => 'Tv',


        ];
    }
}
