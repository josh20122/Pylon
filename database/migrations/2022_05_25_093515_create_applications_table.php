<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('lastname');
            $table->string('gender');
            $table->string('email');
            $table->string('id_number');
            $table->date('date_of_birth');
            $table->string('phone_number');
            $table->string('county');
            $table->string('constituency');
            $table->string('ward');
            $table->string('address');
            $table->string('city');
            $table->string('employment_status');
            $table->string('loan_purpose');
            $table->string('income_range');
            $table->float('loan_amount');
            $table->float('interest');
            $table->float('number_of_months');
            $table->float('total_repayments');
            $table->float('monthly_installments');
            $table->float('total_loan_interests');
            $table->string('has_other_loans');
            $table->string('know_about_us');
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
};
