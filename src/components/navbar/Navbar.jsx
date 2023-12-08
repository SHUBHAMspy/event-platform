import React from 'react'
import navLinks from './navlinks'

const Navbar = () => {
  return (
    <nav className="p-4 container mx-auto flex items-center">
      <div className='flex items-start space-x-4'>
        {
          navLinks.map((navlink) => (
            <a className="text-white flex items-center" href={navlink.link}>
              {navlink.icon}
              <span className='text-sm text-gray-500 font-semibold'>{navlink.name}</span>
            </a>
          ))
        }

      </div>
    </nav>
  )
}

export default Navbar