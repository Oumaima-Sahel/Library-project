<?php

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/users', UserController::class);
Route::post('sinup', [UserController::class, 'sinup']);
Route::post('login', [UserController::class, 'login']);

Route::apiResource('/categories', CategoryController::class);
Route::apiResource('/languages', LanguageController::class);

Route::apiResource('/books', BookController::class);
Route::post('/upload', [BookController::class, 'upload']);
