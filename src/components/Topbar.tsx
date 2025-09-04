'use client'
import React from "react";
import Link from "next/link"; // Import Link from Next.js

export default function Topbar() {
  return (
    <nav className="fixed top-0 w-full z-40 border-width/10 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-end items-center h-16">

          {/* Desktop Menu */}
          <div className=" md:flex items-center space-x-8">
            <Link href="/Home"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</span></Link>
            <Link href="/dashboard"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Dashboard</span></Link>
            <Link href="/memories"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Memories</span></Link>
            <Link href="/profile"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Profile</span></Link>
          </div>

        </div>
      </div>
    </nav>
  );
};
