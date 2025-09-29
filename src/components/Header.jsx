import React, { useEffect, useState } from 'react'

const Header = () => {
  
  return (
    <div className='py-5 w-full flex item-center justify-between px-25 font-family-sans'>
        <a href='home' className='text-4xl font-bold'>Rayyan</a>
        <div className='pt-3 text-xl flex gap-3 font-semibold  '>
          <a href='#about'>About Me</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Project</a>
          <h1>Contact Me</h1>
        </div>
        <div className='bg-black w-[120px] rounded-2xl py-0.2 h-[45px] px-2 flex items-center'>
        <button className='text-white text-xl font-semibold'>Resume</button>
        </div>

    </div>
  )
}

export default Header;