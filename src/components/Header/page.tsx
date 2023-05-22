import React from 'react'
import Logo from '../Icons/Logo'
import NavbarItems from '../NavbarItem/page'
import SearchField from '../SearchField/page'

const Header = () => {
  return (
    <div className='px-10 py-3 flex justify-between shadow-md'>
        <div className='flex items-center'>
            <Logo/>
            <NavbarItems/>
            <SearchField/>
        </div>
        <div className='flex items-center text-base font-medium'>
            <button className='w-20 h-10 border-none '>Log in</button>
            <button className='text-white bg-gradient-to-r from-red-btn to-orange-btn ml-6 w-20 h-10 border-none rounded-10 '>Sign up</button>
        </div>
    </div>
  )
}

export default Header