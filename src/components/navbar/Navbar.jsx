import React from 'react'
import navLinks from './navlinks'

const Navbar = () => {
  return (
    <nav className="p-4 container mx-auto flex items-center">
      <div className='flex items-start space-x-4'>
        {
          navLinks.map((navlink) => (
            <a className="text-white flex items-center">
              {navlink.icon}
              <span className='text-sm text-slate-800'>{navlink.name}</span>
            </a>
          ))
        }

      </div>
    </nav>
  )
}

export default Navbar