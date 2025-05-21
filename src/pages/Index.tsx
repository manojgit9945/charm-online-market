
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ProductGrid />
        <CartDrawer />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
