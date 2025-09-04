'use client';
import React from "react";
export default function Footer()
{return(
  <footer className="bg-gray-900 text-gray-300 mt-16 w-full">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-extrabold text-white">Travel Tracker</h2>
      <p className="mt-3 text-gray-400">
        Track your journeys, discover new places, and relive your adventures on an interactive map.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-400 transition">instagram</a>
        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
        
      </div>
    </div>
  </div>
  <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Travel Tracker. All rights reserved.
  </div>
</footer>

)
}