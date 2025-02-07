"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-10 py-24 gap-10">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold leading-tight text-gray-800">
            Transform your space
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            The mind creates the beautiful, the heart creates the home.
          </p>
          <div className="mt-6 flex space-x-4">
            <Button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Start Project
            </Button>
            <Button
              variant="outline"
              className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/interior.jpg"
            alt="Interior Design"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Image Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-10">
        {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            width={200}
            height={200}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </section>
    </main>
  );
}
