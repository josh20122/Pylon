<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'is_guest' => rand(0, 1),
            'can_refer' => rand(0, 1),
            'is_admin' => rand(0, 1),
            'is_super_admin' => rand(0, 1),
            'has_pending_loan' => rand(0, 1),
            'has_other_loans' => rand(0, 1),
            'has_crb' => rand(0, 1),
            'has_deposited' => rand(0, 1),

        ];
    }
}
