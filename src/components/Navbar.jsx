'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch, FaMoon, FaSun, FaCommentAlt, FaBars } from 'react-icons/fa';
import { useDarkMode } from '@/components/DarkModeProvider';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-2 md:left-4 right-2 md:right-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-full shadow-lg border border-gray-500">
          <div className="flex flex-row items-center justify-between px-4 py-2 md:py-0 h-16">
            {/* Website Name */}
            <div className="flex-shrink-0 md:mb-0 ml-2 ">
              <Link href="/" className="text-xl font-bold text-white">
                Tech Resource Hub
              </Link>
            </div>
            <div className='flex flex-row items-center justify-between'>
              {/* Search Bar */}
              <div className=" hidden md:flex md:w-auto md:mx-4 mb-2 md:mb-0">
                <form onSubmit={handleSearch} className="relative ">
                  <input
                    type="text"
                    placeholder="Search technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:max-w-lg px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden relative">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md  text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FaBars size={24} />
                </button>
                {/* Dark Mode Toggle and Feedback Link */}
                <div className={`absolute top-16 right-0 w-48 bg-black border rounded-md py-4 px-2 space-y-4 border-gray-500 flex flex-col md:flex-row items-center ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0"
                  >
                    {darkMode
                      ? <div className='flex flex-row items-center justify-between gap-4'><FaSun size={24} /> <span className='text-md'>Light Mode</span></div>
                      : <div className='flex flex-row items-center justify-between gap-4'><FaMoon size={24} /> <span className='text-md'>Dark Mode</span></div>
                    }
                  </button>
                  <Link
                    href="/feedback"
                    className="p-2 flex flex-row items-center justify-between gap-4 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4"
                  >
                    <FaCommentAlt size={24} />
                    <span className='text-md'>Feedback</span>
                  </Link>
                </div>
              </div>

              <div className='flex flex-row items-center justify-between'>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0"
                >
                  {darkMode
                    ? <div className='flex flex-row items-center justify-between gap-2'><FaSun size={24} /> <span className='text-md'>Light Mode</span></div>
                    : <div className='flex flex-row items-center justify-between gap-2'><FaMoon size={24} /> <span className='text-md'>Dark Mode</span></div>
                  }
                </button>
                <Link
                  href="/feedback"
                  className="p-2 flex flex-row items-center justify-between gap-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4"
                >
                  <FaCommentAlt size={24} />
                  <span className='text-md'>Feedback</span>
                </Link>

              </div>


            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;