import React from "react";
import HeroSection from "./HeroSection"; // Import the HeroSection component

const Home = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Other sections can be added below */}
      <div className="mt-10">
        {/* Placeholder for Carousel */}
        <section className="container mx-auto px-6 lg:px-20 py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Image Carousel (Placeholder)
          </h2>
          <p className="text-center text-gray-600">
            This is where your carousel component will go.
          </p>
        </section>

        {/* Placeholder for FAQ */}
        <section className="container mx-auto px-6 lg:px-20 py-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            FAQs (Placeholder)
          </h2>
          <p className="text-center text-gray-600">
            This is where your FAQ accordion component will go.
          </p>
        </section>

        {/* Placeholder for Contact Form */}
        <section className="container mx-auto px-6 lg:px-20 py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Contact Form (Placeholder)
          </h2>
          <p className="text-center text-gray-600">
            This is where your contact form component will go.
          </p>
        </section>

        {/* Placeholder for Footer */}
        <footer className="container mx-auto px-6 lg:px-20 py-10 bg-gray-800 text-white">
          <p className="text-center">
            &copy; 2025 Your Brand Name. All rights reserved.
          </p>
          <p>abcd</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
