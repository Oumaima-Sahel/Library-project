<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'name_author' => fake()->name(),
            'denscription' => fake()->paragraph(3),
            'post_date' => fake()->dateTimeBetween('-4 year', 'now'),
            'category_id' => Category::inRandomOrder()->first(),
            'language_id' => fake()->numberBetween(1, 3),
            'url_install' => fake()->url(),
            'image' => fake()->imageUrl(),
        ];
    }
}
