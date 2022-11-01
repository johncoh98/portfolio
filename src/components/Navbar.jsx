import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import  {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setnav] = useState(false);
    const handleClick = () => setnav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={500}>Home </Link></li>
                <li><Link to='about' smooth={true} duration={500}>About </Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills </Link></li>
                <li><Link to='projects' smooth={true} duration={500}>Projects </Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact </Link></li>
            </ul>
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ?  <FaBars /> : <FaTimes />}
        </div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[90%] items-center  mr-[10px] md:hover:ml-[150px] hover:ml-[500px] duration-300 bg-blue-500  '>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[90%] items-center  mr-[10px] md:hover:ml-[150px] hover:ml-[500px] duration-300 bg-gray-500'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className=' w-40 h-[60px] flex justify-between relative md:right-[50%] xs:right-[90%] items-center  mr-[10px] md:hover:ml-[150px] hover:ml-[500px] duration-300 bg-red-400  '>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Mail <FaMailBulk size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar