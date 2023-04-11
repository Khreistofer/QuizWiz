<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|s
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [EmailController::class, 'remember']);
Route::post('home', [EmailController::class, 'logIn']);
Route::get('/home', [EmailController::class, 'homeGetRequest']);
Route::view('signIn', 'signIn');
Route::get('logOut', [EmailController::class, 'logOut']);
Route::get('/deleteAccount', [EmailController::class, 'deleteAccount']);
Route::view('signUp', 'signUp');
Route::post('createAccount', [EmailController::class, 'createAccount']);
Route::view('/profile', 'profile');

// khreis stuff
Route::view('/difficulty', 'difficulty');
Route::view('/quiz', 'quiz');
Route::view('/result', 'result');
Route::view('/guessFlag', 'guessFlag');
Route::get('/end', [EmailController::class, 'updateRating']);
Route::view('/wordle', 'wordle');
Route::view('/scramble', 'scramble');
Route::view('/memory', 'memory');
Route::view('/contact', 'contact');
Route::get('leaderboard', [EmailController::class, 'setLeaderboard']);

