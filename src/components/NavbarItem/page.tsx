import React from 'react'

const NavbarItems = () => {
  return (
    <ul className='flex ml-10 text-base font-medium '>
        <li className='cursor-pointer'>Explore</li>
        <li className='md:ml-5 lg:ml-7 cursor-pointer'>Genres</li>
        <li className='md:ml-5 lg:ml-7 cursor-pointer'>Whitelists</li>
        <li className='md:ml-5 lg:ml-7 cursor-pointer'>Learn</li>
        <li className='md:ml-5 lg:ml-7 cursor-pointer'>Community</li>
    </ul>
  )
}

export default NavbarItems