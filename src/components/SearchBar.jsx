import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <div className='relative'>
      <div className="flex">
        <span className='absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-2xl'>
          <BiSearch />
        </span>
        <input type="text" placeholder='Search here' className='p-3 w-96 rounded-full px-14 outline-lime-400' />
      </div>
    </div>
  )
}

export default SearchBar