'use client';
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 ">
      {/* Headline */}
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Track Your Travels, <br className="hidden sm:block"/> Relive Your Adventures
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl">
        Log your trips, add photos, and explore your adventures on an interactive world map.
      </p>

      {/* Map Section */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509385153!2d78.24323015659058!3d17.412608643969392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2%2C%20Telangana!5e0!3m2!1sen!2sin!4v1756795676677!5m2!1sen!2sin"
  className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-0 rounded-lg shadow-lg"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
></iframe>
        </div>
      </div>
    </div>
  );
}
