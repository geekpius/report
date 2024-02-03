<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->boolean('show_position')->default(true);
            $table->string('school_name')->nullable();
            $table->string('school_postal')->nullable();
            $table->string('motto')->nullable();
            $table->string('school_phone')->nullable();
            $table->double('sba_percent')->default(0.3);
            $table->double('exam_percent')->default(0.7);
            $table->string('signature')->nullable();
            $table->string('stamp')->nullable();
            $table->string('logo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
