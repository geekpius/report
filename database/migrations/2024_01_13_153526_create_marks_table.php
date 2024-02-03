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
        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('year');
            $table->string('term');
            $table->string('form');
            $table->string('subject');
            $table->double('assessment_one')->default(0);
            $table->double('assessment_two')->default(0);
            $table->double('assessment_three')->default(0);
            $table->double('assessment_four')->default(0);
            $table->double('assessment_sub_total')->default(0);
            $table->double('test_one')->default(0);
            $table->double('test_two')->default(0);
            $table->double('test_sub_total')->default(0);
            $table->double('assignment_one')->default(0);
            $table->double('assignment_two')->default(0);
            $table->double('assignment_three')->default(0);
            $table->double('assignment_four')->default(0);
            $table->double('assignment_sub_total')->default(0);
            $table->double('exam')->default(0);
            $table->double('sba_percent')->default(0);
            $table->double('exam_percent')->default(0);
            $table->double('total')->default(0);
            $table->string('remark');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marks');
    }
};
