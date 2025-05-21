
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light mb-3">Our Products</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Browse our carefully curated collection of premium products designed to enhance your everyday life.
        </p>
      </div>

      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              onClick={() => setActiveCategory(category.value)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
