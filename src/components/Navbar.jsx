import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className='bg-gray-900 text-white p-4'
    >
      <div className='flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold'>
          Gits College, Udaipur
        </Link>
        
        {/* Hamburger icon (visible on small screens) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <i className="fas fa-bars text-2xl"></i> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Links - hidden on small screens and shown on medium and up */}
        <div className={`hidden md:flex items-center space-x-4`}>
          <Link to='/' className='hover:text-purple-300'>Home</Link>
          <Link to='/features' className='hover:text-purple-300'>Documentation</Link>
          <Link to='/contact' className='hover:text-purple-300'>Contact</Link>
          <button className='flex items-center'>
            <i className="fas fa-user text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible only when hamburger is clicked */}
      {isOpen && (
        <div className='md:hidden flex flex-col mt-2 space-y-2'>
          <Link to='/' className='hover:text-purple-300'>Home</Link>
          <Link to='/features' className='hover:text-purple-300'>Documentation</Link>
          <Link to='/contact' className='hover:text-purple-300'>Contact</Link>
          <Link to='/' className='hover:text-purple-300' > Login<span>&nbsp;&nbsp;
            <i className="fas fa-user text-xl"></i>
           </span></Link>
        </div>
      )}
    </motion.nav>
  );
}
