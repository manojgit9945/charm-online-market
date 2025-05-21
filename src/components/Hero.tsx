
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`
        }}
      ></div>
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 animate-fade-in max-w-3xl">
          Elevate Your Everyday
        </h1>
        <p className="text-lg md:text-xl max-w-lg mb-8 opacity-90 animate-fade-in">
          Discover curated collections of premium products designed for modern living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button 
            className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6"
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/20 rounded-none px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
