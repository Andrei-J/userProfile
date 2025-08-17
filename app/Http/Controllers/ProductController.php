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

  public function Delete(Product $product){
     $product->delete();
     return Redirect::route('products.index')->with('success', 'Product deleted successfully.');
  }


  public function Edit(Product $product)
{
    return Inertia::render('Products/Edit', [
        'product' => $product
    ]);
}

public function Update(Request $request, Product $product)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'price' => 'required|numeric|min:0',
        'description' => 'nullable|string',
    ]);

    $product->update($request->all());

    return redirect()->route('products.index');
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
