<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'name_author' => 'required',
            'denscription' => 'required',
            'post_date' => 'required',
            'category_id' => 'required',
            'language_id' => 'required',
            'url_install' => 'required',
            'image' => 'required'
        ];
    }
}
