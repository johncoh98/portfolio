import React from 'react'
import  {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name="home" className=' bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 mb-4'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-500 mb-4'>John Cohen</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-700 mb-4'>I'm a Full-Stack Developer.</h2>
        <div>
        <Link to='projects' smooth={true} duration={500}><button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 animate-bounce'>View my Work </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero