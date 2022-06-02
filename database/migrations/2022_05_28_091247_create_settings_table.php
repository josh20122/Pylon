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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->float('interest')->default(0.042);
            $table->float('misce_expenses')->default(0.042);
            $table->float('credit_score_deductions')->default(0.042);
            $table->float('minimum_savings')->default(0.042);

            $table->string('contact')->default('+254 758153416');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
};
