import React from "react";
import Image from "next/image";
import { Users, Target, Rocket, Award } from "lucide-react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Add these icons for social media

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="cursor-pointer">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=320,fit=crop,q=95/AzGeNv8QxRTqXJan/20241226_222044-AwvDvRazrEUZ8ZMp.png"
                alt="logo-helper-buddy"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex space-x-6 items-center">
            <Link
              href="/"
              className="text-gray-800 hover:text-black transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-black transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-16 py-48 relative"> {/* Hero Section Padding */}
        <div className="absolute inset-0  z-10"></div>

        <div className="relative z-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              Cleaner Spaces, Happier Places - Eco-Friendly Solutions, Expertly Delivered.
            </h1>
            <p className="text-gray-600 mb-8">
              HelperBuddy offers professional house, office, and AC cleaning services across India, delivering top-quality, eco-friendly solutions tailored to your needs. Our trusted team ensures your spaces are spotless, fresh, and well-maintained.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1738863747~exp=1738867347~hmac=5d45a05b219a6608ef5703cd81b64688f2b0034d727abefc1e5f96e41e561a3d&w=1060"
              alt="Team Collaboration"
              width={400}
              height={300}
              className="rounded-lg "
            />
            <Image
              src="https://img.freepik.com/free-photo/man-lifting-charming-girl-shoulders_1153-3184.jpg?t=st=1738864211~exp=1738867811~hmac=13c29e3c39965535553993ed782885253cfb8e3e3f6295958c67bbd3356a3c5c&w=1060"
              alt="Office Meeting"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Follow Us
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/people/Helper-Buddy/61566410515044/" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-gray-800 hover:text-black transition-colors duration-300" size={40} />
          </a>
          <a href="https://www.instagram.com/helperbuddy.in/#" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-800 hover:text-black transition-colors duration-300" size={40} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gray-800 hover:text-black transition-colors duration-300" size={40} />
          </a>
          <a href="https://x.com/helperbuddyin" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-gray-800 hover:text-black transition-colors duration-300" size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
