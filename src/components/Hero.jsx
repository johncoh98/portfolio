import React from 'react'

const Hero = () => {
  return (
    <div name="home" className=' bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>John Cohen</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta fugiat illum recusandae eius, aspernatur adipisci distinctio fuga illo minus? Dolores vero laudantium fugiat ipsum! Iusto pariatur consectetur eum omnis.</p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View my Work </button>
        </div>
      </div>
    </div>
  )
}

export default Hero