import React from 'react'

const Navbar = ()=> {
  return (
    <nav className='flex bg-blue-500 justify-between px-6 p-2'>
        <div className='text-white font-bold text-2xl'>TODO</div>
        <ul className='text-lg flex gap-4 text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
