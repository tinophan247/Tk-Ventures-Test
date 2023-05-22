import React from 'react'
import Search from '../Icons/Search'


const SearchField = () => {
  return (
    <div className='w-338 h-6 py-2 px-4 bg-search-bg text-search-text md:ml-5 lg:ml-8 rounded-full flex items-center'>
        <Search/>
        <input type='text' className='text-sm ml-4 border-none bg-search-bg w-full h-6 focus:outline-none' placeholder='Search NFTs / Collections / Addresses'/>
    </div>
  )
}

export default SearchField 