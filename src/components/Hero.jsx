import React from "react";
import heroimage from '../assets/Zed.png' 
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Hero = () => {    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8' id="hero">
               
               <motion.div 
            animate={{ x: 5, y: 40 }} // Move the image 100px to the right and 50px down
            transition={{ duration: 3 }} // Duration of the animation
            className='col-span-1 my-auto mx-auto w-[400px] h-auto lg:w[600px]'>               
                    <img src={heroimage} alt="heroimage"/>
                </motion.div>
           
                <div className='col-span-2 px-5 my-auto'>
                    <h1 style={{fontFamily: 'Gill Sans MT, sans-serif', fontWeight: 'bold' }} class="text-3xl font-bold text-white text-4x1 sm:text-5x1 lg:text-8x1">
                        <span className="text-white">
                            I'm a
                        </span> <br/>
                        <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "WebDesigner",
                            1000,
                            "Student",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>

                    <p style={{fontFamily: 'Gill Sans MT, sans-serif', fontWeight: 'bold' }} className=" text-white sm:text-lg my-6 lg:text-x1">
                    My name is Cedrick Calicdan, and I attend Cavite State University (Bacoor branch) as a computer science major.
                    </p>
                    <div className="my-8">
                        <a href="#contact" className="px-6 py-3 w-full rounded mr-4 border border-gray-400
                        hover:bg-gradieant-to-br from-orange-500 
                        text-white bg-primary-color1 hover:border-none">  
                            Contact 
                     </a>
            <div>
                <div className="my-4">
                <ul className='flex md:flex'>
                <li className='p-5'><a href="https://www.facebook.com/Zed.LOL.24/"><FaFacebook className='icon fb'/></a></li>  
                <li className='p-5'><a href="https://www.instagram.com/rickcalicdan/"><FaInstagramSquare className='icon ig'/></a></li> 
                <li className='p-5'><a href="https://www.discordapp.com/users/888682934461157456"><FaDiscord className='icon ig'/></a></li>  
                </ul>
                </div>
            </div>
                    </div>
            </div>       
        </div>
    )
}
export default Hero