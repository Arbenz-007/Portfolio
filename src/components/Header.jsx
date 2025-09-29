import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='py-5 w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-25 font-family-sans gap-4 sm:gap-0 relative'>
        <a href='home' className='text-2xl sm:text-4xl font-bold'>Rayyan</a>
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
            ☰
          </button>
        </div>
        <div className={`pt-3 text-lg sm:text-xl flex flex-col sm:flex-row gap-3 font-semibold ${isOpen ? 'block' : 'hidden'} sm:flex`}>
          <a href='#about' onClick={() => setIsOpen(false)}>About Me</a>
          <a href='#skills' onClick={() => setIsOpen(false)}>Skills</a>
          <a href='#projects' onClick={() => setIsOpen(false)}>Project</a>
          <h1>Contact Me</h1>
        </div>
        <div className='bg-black w-full sm:w-[120px] rounded-2xl py-0.2 h-[45px] px-2 flex items-center justify-center'>
        <button className='text-white text-lg sm:text-xl font-semibold'>Resume</button>
        </div>

    </div>
  )
}

export default Header;