"use client"
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

function Body() {
    const [selected, setSelected] = useState("About")
  return (
    <div className='bg-[#1E1E1E] rounded-lg text-white w-full xl:relative border border-gray-100/10 p-3 pt-5'>
        <Navbar setSelected={setSelected} />
        body
    </div>
  )
}

export default Body