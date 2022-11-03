import React from 'react';
import ytbg from '../assets/ytbg.png';
import ecom from '../assets/ecom.png'; 
import restaut from '../assets/restaut.jpg';

const Projects = () => {
  return (
    <div name='projects' className='bg-[#0a192f] md:h-screen text-gray-300 w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600 font-serif'>Projects</p>
                <p className='py-6'>Here are my different projects</p>
            </div>
            <div className='grid xs:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
                <div style={{backgroundImage: `url(${ytbg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2wl font-bold  text-white tracking-wider'>
                            BlueTube
                        </span>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://bluetube-umber.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/johncoh98/youtube_clone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                            
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${restaut})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2wl font-bold  text-white tracking-wider'>
                            Restaurant
                        </span>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://resto-liart.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer"  href="https://github.com/johncoh98/resto">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                            
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ecom})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2wl font-bold  text-white tracking-wider'>
                            BuyTech
                        </span>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://buytech-virid.vercel.app/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/johncoh98/buytech">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects