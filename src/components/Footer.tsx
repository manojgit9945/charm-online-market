
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">LUXE</h3>
            <p className="text-sm text-gray-500 mb-4">
              Premium lifestyle products for the modern individual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.296.644 1.777 1.197.527.545.873 1.19 1.114 1.88.246.65.415 1.389.465 2.465.047 1.05.06 1.405.06 4.005s-.013 2.954-.06 4.005c-.05 1.076-.219 1.814-.465 2.465-.241.69-.587 1.335-1.114 1.88a4.918 4.918 0 01-1.777 1.196c-.636.248-1.363.417-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.048-1.791-.217-2.427-.465a4.919 4.919 0 01-1.777-1.196 4.92 4.92 0 01-1.114-1.88c-.246-.651-.415-1.39-.465-2.465-.047-1.05-.06-1.405-.06-4.005s.013-2.954.06-4.005c.05-1.076.219-1.814.465-2.465.241-.69.587-1.335 1.114-1.88a4.92 4.92 0 011.777-1.197c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.886 2 12.315 2zm0 1.802c-2.379 0-2.707.011-3.654.053-.883.04-1.36.188-1.677.312a3.121 3.121 0 00-1.13.736 3.12 3.12 0 00-.736 1.13c-.124.318-.271.795-.312 1.677-.042.947-.053 1.275-.053 3.654s.011 2.707.053 3.654c.04.883.188 1.36.312 1.677.167.428.39.817.736 1.13.399.312.728.574 1.13.736.318.124.795.271 1.677.312.947.042 1.275.053 3.654.053s2.707-.011 3.654-.053c.883-.04 1.36-.188 1.677-.312a3.12 3.12 0 001.13-.736c.312-.399.574-.728.736-1.13.124-.318.271-.795.312-1.677.042-.947.053-1.275.053-3.654s-.011-2.707-.053-3.654c-.04-.883-.188-1.36-.312-1.677a3.121 3.121 0 00-.736-1.13 3.121 3.121 0 00-1.13-.736c-.318-.124-.795-.271-1.677-.312-.947-.042-1.275-.053-3.654-.053z" clipRule="evenodd" />
                  <path d="M12.315 7.143a4.858 4.858 0 100 9.715 4.858 4.858 0 000-9.715zm0 8.01a3.151 3.151 0 110-6.303 3.151 3.151 0 010 6.304zm6.194-8.2a1.135 1.135 0 10-2.27 0 1.135 1.135 0 002.27 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Bags</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Home</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Store Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-black transition-colors">Payment Methods</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe to get special offers and once-in-a-lifetime deals.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 border-gray-300 focus:ring-0 focus:border-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
