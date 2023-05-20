import React from 'react'
import Search from '../Icons/Search'

const SearchField = () => {
  return (
    <div className='w-338 h-6 py-2 px-4 bg-search-bg text-search-text md:ml-5 lg:ml-8 rounded-full flex items-center'>
        <Search/>
        <p className='text-sm ml-4'>Search NFTs / Collections / Addresses</p>
    </div>
  )
}

export default SearchField 