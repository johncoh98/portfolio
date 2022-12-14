import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import sanity from '../assets/sanity.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import mongo from '../assets/mongo.png';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <div name='skills'  className=' w-full h-screen bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 font-serif'>Skills</p>
                <p className='py-4'>Technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8 mb-8 md:mb-0'>
            <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html icon" />
                    <p>HTML</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="css icon" />
                    <p>CSS</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="js icon" />
                    <p>JavaScript</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="node icon" />
                    <p>Node</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tw icon" />
                    <p>TailWind</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="react icon" />
                    <p>React</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongo} alt="mongo icon" />
                    <p>Mongo DB</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto relative top-4 ' src={sanity} alt="sanity icon" />
                    <p className='relative top-12'>Sanity</p>
                </div>
                </Tilt>
                <Tilt className="parallax-effect" perspective={500}>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="gh icon" />
                    <p>GitHub</p>
                </div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default Skills