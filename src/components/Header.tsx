"use client";

import React from "react";

const Header = () => {
  return (
    <header className='w-full py-6 px-4 md:px-8 bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900'>AI Dashboard</h1>
        <p className='mt-2 text-gray-600'>Welcome back, User! 👋</p>
      </div>
    </header>
  );
};

export default Header;
