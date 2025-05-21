
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "accessories",
    description: "Elegant minimalist watch with leather strap. Perfect for everyday wear."
  },
  {
    id: "2",
    name: "Leather Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "bags",
    description: "Premium leather backpack with multiple compartments. Durable and stylish."
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    description: "High-quality wireless earbuds with noise cancellation. Immersive sound experience."
  },
  {
    id: "4",
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "clothing",
    description: "Soft cotton t-shirt in classic design. Comfortable and versatile."
  },
  {
    id: "5",
    name: "Ceramic Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home",
    description: "Handcrafted ceramic mug in minimalist design. Perfect for your morning coffee."
  },
  {
    id: "6",
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "accessories",
    description: "UV-protected sunglasses with polarized lenses. Stylish and functional."
  },
  {
    id: "7",
    name: "Desk Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "home",
    description: "Modern desk lamp with adjustable brightness. Perfect for your workspace."
  },
  {
    id: "8",
    name: "Woolen Scarf",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1483103068651-8ce44652c331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "clothing",
    description: "Soft woolen scarf in neutral colors. Warm and cozy for colder days."
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Accessories", value: "accessories" },
  { name: "Bags", value: "bags" },
  { name: "Electronics", value: "electronics" },
  { name: "Clothing", value: "clothing" },
  { name: "Home", value: "home" }
];
