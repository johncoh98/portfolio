import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
           <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
    <form method='POST' action="https://getform.io/f/637e44b5-c6d0-4b40-a735-422257c272f7" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 '>
            <p className='text-gray-300 py-4 text-center'>Submit the form below. <br /> Or send email to john.coh98@gmail.com <br />Or contact me by my phone number 054-369-2295</p>
        </div>
        <input className='bg-slate-300 mb-2 p-2' type="text" placeholder='Name' name='name' />
        <input className='py-4 p-2 mb-2 bg-slate-300' type="email" placeholder='Email' name='email' />
        <textarea className='bg-slate-300 p-2' name="message" placeholder='Message' rows="10"></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>Let's Link Up</button>
        </form>
    </div>
  )
}

export default Contact