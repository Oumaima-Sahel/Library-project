<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Book;
use App\Models\Category;
use App\Models\Language;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(2)->create();
        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
        ]);

        $languages = [
            [
                'name' => 'arabic'
            ],
            [
                'name' => 'french'
            ],
            [
                'name' => 'english'
            ],
        ];
        foreach ($languages as $language) {
            Language::factory()->create($language);
        }

        Category::factory(5)->create();
        Book::factory(20)->create();
    }
}
