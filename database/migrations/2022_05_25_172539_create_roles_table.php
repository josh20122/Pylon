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
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->boolean('is_guest')->default(1);
            $table->boolean('can_refer')->default(0);
            $table->boolean('is_admin')->default(0);
            $table->boolean('is_super_admin')->default(0);
            $table->boolean('has_pending_loan')->default(0);
            $table->boolean('has_other_loans')->default(0);
            $table->boolean('has_crb')->default(0);
            $table->boolean('has_deposited')->default(0);
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
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
        Schema::dropIfExists('roles');
    }
};
