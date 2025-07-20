<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class ProductController extends Controller
{
  public function Index(){
   $products = Product::all();
   return Inertia::render('Products/Index', compact('products'));

  }

  public function Create(){
     return Inertia::render('Products/Create');
  }

   public function Store(Request $request){
    $request->validate([
        'name' => 'required|string|max:255',
        'price' => 'required|numeric|min:0',
        'description' => 'nullable|string',
    ]);

    Product::create($request->all());
    return redirect()->route('products.index');
  }
}
