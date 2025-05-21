
import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { toggleCart, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tight">LUXE</a>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Collections</a>
            <a href="#" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart}
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
