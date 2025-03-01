import React from 'react';

function Logo({ navOpen }) {
  return (
    <a href="#home">
      <div className={`${navOpen ? "text-gray-300" : "text-white"} sm:text-white font-bold text-2xl`}>
        Logo
      </div>
    </a>
  );
}

export default Logo;