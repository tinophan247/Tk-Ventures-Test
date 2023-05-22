import React from 'react'

const Pagination = () => {
  return (
    <div className='mt-6 flex justify-between'>
        <p className='text-base'>Showing 1 - 100 out of 146</p>
        <div className='text-base flex'>
            <button className='w-8 h-8 flex justify-center items-center text-white bg-[#D71C5D] rounded-lg border-none'>1</button>
            <button className='w-8 h-8 flex justify-center items-center rounded-lg border-none ml-2'>2</button>
            <button className='w-8 h-8 flex justify-center items-center rounded-lg border-none ml-2'>3</button>
            <button className='w-8 h-8 flex justify-center items-center rounded-lg border-none ml-2'>...</button>
            <button className='w-8 h-8 flex justify-center items-center rounded-lg border-none ml-2'>32</button>
        </div>
        <div/>
    </div>
  )
}

export default Pagination;