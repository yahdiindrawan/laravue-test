<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_subjects')->insert([
            'user_id' => 1,
            'subject_id' => 1,
            'created_at' => now()
        ]);
    }
}
