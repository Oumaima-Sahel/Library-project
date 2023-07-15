<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $validated = $request->validated();
        $book = Book::create($validated);

        return response()->json(['book' => $book], 200);
    }

    // upload file
    public function upload(Request $request)
    {
        // validate the request data
        $this->validate($request, [
            'image' => 'required|max:2048',
        ]);

        $path = $request->file('image')->store('images', 'public');

        // return the uploaded image path
        return response()->json(['image' => $path]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreBookRequest $request, Book $book)
    {
        $book->update($request->all());

        return response()->json(['book' => $book], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json([
            'status' => true,
            'massage' => "book deleted successfully!"
        ], 200);
    }
}
