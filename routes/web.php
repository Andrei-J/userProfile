<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/Products',[ProductController::class, 'Index'])->name('products.index'); 
    Route::get('/Products/Create',[ProductController::class, 'Create'])->name('products.create'); 
    Route::post('/Products',[ProductController::class, 'Store'])->name('products.store');
    Route::get('/Products/{product}/edit', [ProductController::class, 'Edit'])->name('products.edit');
    Route::put('/Products/{product}', [ProductController::class, 'Update'])->name('products.update');
    Route::delete('/Products/{product}', [ProductController::class, 'Delete'])->name('products.delete');

});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
