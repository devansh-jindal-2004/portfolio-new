import React from 'react'

function Logo({navOpen}) {
  return (
    <a href="#home">
        <div className={`${navOpen ? "text-gray-700" :"text-white"} sm:text-gray-700`}>Logo</div>
    </a>
  )
}

export default Logo