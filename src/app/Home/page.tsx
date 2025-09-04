'use client';
import React from "react";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <section
        id="home"
        className="flex flex-col justify-center items-center text-center text-2xl text-pink-500 py-16 px-4 sm:py-24 bg-gray-50 w-full"
      >
        <div className="mb-8">
          <img
            src="/TOUR.png"
            alt="Travel Tracker Logo"
            className="w-40 h-40 sm:w-60 sm:h-60 mt-5 object-contain"
          />
        </div>

        <h1 className="max-w-3xl mx-auto mb-6">
          Welcome to Travel Tracker! Make your travel adventures more enjoyable and efficient by saving memories, uploading pictures, marking visited countries, and much more.
        </h1>

        <div>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg border border-amber-300 hover:bg-blue-700 transition-transform transform hover:scale-105 cursor-pointer">
            Mark Your Places
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
