import  { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import logo from '../assets/logo-text.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <nav className="container relative mx-auto flex w-full items-center justify-between py-2.5 px-4">

        
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

         
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img src={logo} alt="Dev Stack" />
          </div>

        
          <div className="hidden md:block">
            <ul className="flex gap-4 text-sm font-medium transition-colors">
              <li className="text-pink-600">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="ml-auto md:ml-0">
            <div className="flex items-center gap-1 sm:gap-4">

              <button className="text-xs font-medium text-gray-700 hover:text-pink-600 transition-colors px-2 py-2 sm:px-3 sm:text-sm">
                Sign In
              </button>

              <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:opacity-90 transition-opacity sm:px-6 sm:py-2.5 sm:text-sm">
                Sign Up
              </button>

            </div>
          </div>

        </nav>

       
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-md md:hidden">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="text-pink-600">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}