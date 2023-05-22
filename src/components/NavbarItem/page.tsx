import React from 'react'
import Link from 'next/link';

const NavbarItems = () => {
  return (
    <ul className='flex ml-10 text-base font-medium '>
        <Link href="/explore">Explore</Link>
        <Link href="/genres" className='md:ml-5 lg:ml-7'>Genres</Link>
        <Link href="/whitelists" className='md:ml-5 lg:ml-7'>Whitelists</Link>
        <Link href="/learn" className='md:ml-5 lg:ml-7'>Learn</Link>
        <Link href="/community" className='md:ml-5 lg:ml-7'>Community</Link>
    </ul>
  )
}

export default NavbarItems