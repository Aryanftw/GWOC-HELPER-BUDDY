"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CartSidebar from "@/src/components/CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=320,fit=crop,q=95/AzGeNv8QxRTqXJan/20241226_222044-AwvDvRazrEUZ8ZMp.png"
              alt="logo-helper-buddy"
              width={120}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {["Home", "About", "Services", "Contact", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="text-gray-900 hover:text-gray-700 transition-colors duration-300"
          >
            <ShoppingCart size={28} />
          </button>

          <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
