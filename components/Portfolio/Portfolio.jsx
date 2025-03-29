"use client"
import React, { useEffect } from 'react'

function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='h-full w-full px-4 md:px-8 py-6 space-y-6'>
      <div className="text-3xl font-bold text-gray-100 relative w-fit">
        Portfolio
        <div className="h-1 w-1/2 bg-[#fce469] rounded-full mt-5 p-1"></div>
      </div>

      <h1>Projects to be Added Soon</h1>
      
    </div>
  )
}

export default Portfolio