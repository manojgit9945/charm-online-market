
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="product-card overflow-hidden border-0 rounded-none">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-4 px-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-base">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-3 capitalize">{product.category}</p>
          </div>
          <span className="font-medium">${product.price.toFixed(2)}</span>
        </div>
        <Button 
          onClick={() => addToCart(product)} 
          variant="outline" 
          className="w-full mt-2 rounded-none border border-gray-200 hover:bg-black hover:text-white transition-colors"
        >
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
