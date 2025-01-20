import React from "react";
import heroImage from "../assets/Logo.png"; // Replace with your hero image/logo path

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      {" "}
      {/* Explicitly set height to 100vh */}
      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col-reverse lg:flex-row items-center h-full">
        {" "}
        {/* Set h-full here to make sure it takes the full height */}
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
            Simplify Your Calories, <br />{" "}
            <span className="text-green-500">Embrace a Healthier You!</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Track your meals, scan QR codes, and manage your diet seamlessly—all
            in one place.
          </p>
          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-md hover:bg-green-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 font-medium text-lg rounded-md hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Healthy Lifestyle"
            className="w-full lg:w-3/4 rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Optional Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#next-section" className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
