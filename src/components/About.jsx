import React from 'react'
import aboutImg from '../assets/Zed.png' 
import {motion} from 'framer-motion'
import {fadeIn} from '../variant'
import './about.css'
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

        <div className="md:grid md:grid-cols-2 ">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center">
                <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false ,amount: 0.7 }}>

                    <h2 style={{fontFamily: 'Gill Sans MT, sans-serif', fontWeight: 'bold' }} class='text-3xl font-bold text-white 
                    text-4x1 sm:text-5x1 lg:text-8x1'>About Me</h2>
                    <p className='text-base 1g:text-1g'> 
                    Hi! I’m Cedrick S. Calicdan, a Student of CVSU BACOOR Major in Computer Science i have some skills in front-end development 
                    and web design.I thrive on improving more my programming skills.
                    I believe in the power of collaboration, continuous learning and I am always eager to connect with like-minded individuals.

                    Feel free to explore my work, and don’t hesitate to reach out!
                    </p>

                </motion.div>
            </div>
                  <img className = "mx-auto rounded-3x1 py-8 md:py-0" src={aboutImg} alt="aboutImg" width={300} height={300}/>
        </div>
    </div>

        
  )
}

export default About