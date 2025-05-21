
import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, quantity }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex py-4 border-b">
      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{name}</h3>
          <button 
            onClick={() => removeFromCart(id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
        
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded"
            onClick={() => updateQuantity(id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-7 w-7 rounded"
            onClick={() => updateQuantity(id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
          
          <span className="ml-auto font-medium">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
