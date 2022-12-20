import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import  {Link} from 'react-scroll'



const Navbar = () => {
    const [nav, setnav] = useState(false);
    const handleClick = () => setnav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10 shadow-md shadow-[#040c16]'>
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'><Link to='home' smooth={true} duration={500}>Home </Link></li>
                <li className='hover:text-pink-600'><Link to='about' smooth={true} duration={500}>About </Link></li>
                <li className='hover:text-pink-600'><Link to='skills' smooth={true} duration={500}>Skills </Link></li>
                <li className='hover:text-pink-600'><Link to='projects' smooth={true} duration={500}>Projects </Link></li>
                <li className='hover:text-pink-600'><Link to='contact' smooth={true} duration={500}>Contact </Link></li>
            </ul>
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ?  <FaBars /> : <FaTimes />}
        </div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10'}>
            <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl hover:text-pink-600'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className='flex fixed flex-col top-[75%] left-0 z-10'>
            <ul>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[60%] items-center  mr-[10px] md:hover:ml-[150px] hover:ml-[90px] duration-300 bg-blue-500  '>
                    <a target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/john-cohen-3233b9248">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[60%] items-center  mr-[10px] md:hover:ml-[150px] xs:hover:ml-[90px]  duration-300 bg-gray-500'>
    
                    <a target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/johncoh98">
                        GitHub <FaGithub size={30}/>
                    </a>
                
                </li>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[60%] items-center  mr-[10px] md:hover:ml-[150px] hover:ml-[90px] duration-300 bg-red-400  '>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:john.coh98@gmail.com">
                        Mail <FaMailBulk size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar