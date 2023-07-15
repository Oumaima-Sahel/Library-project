<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'name_author',
        'denscription',
        'post_date',
        'category_id',
        'language_id',
        'url_install',
	'image',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
	
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
