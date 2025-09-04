'use client'


import React from "react"
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router=useRouter();
  const goToLogin=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    router.push('/loginsignup');
  }
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/TOUR.png"
          alt="travel-logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer" onClick={goToLogin}>
          Get Started
        </button>
      </div>
    </nav>
  )
}
