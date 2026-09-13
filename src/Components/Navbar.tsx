import React from 'react'
import logo from '../assets/logo-text.png'

export default function Navbar() {
  return (
    <>
    <header className='sticky border-b border-gray-100'>
      <nav className='container mx-auto flex justify-between items-center w-full py-2.5 '>
         <div>
            <img src={logo} alt="" />
         </div>
         <div>
           <ul className='flex gap-4 text-sm font-medium transition-colors'>
            <li className='text-pink-600'>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
         </div>
         <div>
          <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors px-3 py-2">
            Sign In
          </button>
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
         </div>
      </nav>
    </header>
      
    </>
  )
}
