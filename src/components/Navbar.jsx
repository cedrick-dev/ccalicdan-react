import React from 'react'
const Navbar = () => {    
  return (    
     <div className='bg-black text-gray-400 h-[100px] max-w-[2000px] mx-auto flex justify-between items-center'>
       
       <h1 style={{fontFamily: 'Gill Sans MT, sans-serif', fontWeight: 'bold' }} class="text-3xl font-bold text-white ml-4"> C. Calicdan </h1>
        <div className="my-4">
        <ul className='flex md:flex text-white'>
          <li className='p-5'><a href='#about'>About</a></li>
          <li className='p-5'><a href='#projects'>Projects</a></li>
          <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </div>
    
  )  
}

export default Navbar
