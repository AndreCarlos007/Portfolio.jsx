import React from 'react'
import Astro from '../../assets/astro2.0.png'
import './style.css'
import whatz from '../../assets/whatsapp.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-around items-center py-24 px-[5%] '>
      <div id='container' className='text-[#ffffff] text-center md:text-left md:max-w-[45vw]'>
        <span className='text-[#767575] text-xl'>Software Developer | Front-end Developer</span>
        <h1 className='text-[3rem] md:text-[3.5rem] font-bold mt-4'>Hello I'm</h1>
        <h1 className="text-[3rem] md:text-[3.5rem] font-bold text-[#0086B0]">André Carlos</h1>
        <p className='text-[1rem] text-justify mt-4 md:max-w-[35vw] mx-auto'>
          I create digital solutions that prioritize both aesthetics and usability. 
          My portfolio showcases a variety of projects that demonstrate my expertise
          in diverse technologies and innovative design approaches.
        </p>
        <div className='flex gap-10 mt-12 justify-center md:justify-start'>
          <a id='cv' className='font-bold border-solid border-2 text-[white] border-[#0086B0] p-2 rounded-2xl bg-[#0086B0] hover:bg-white hover:text-[black]' href="">DOWNLOAD CV</a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-carloscx/"><img className='w-10' src={linkedin} alt="linkedin" /></a>
          <a href="https://github.com/AndreCarlos007"><img className='w-10' src={github} alt="github" /></a>
          <a href=""><img className='w-10' src={whatz} alt="whatsapp" /></a>
        </div>
      </div>
       
      <div className='flex justify-center items-center mt-8 md:mt-0'>
        <img id='astro' className='w-[18rem] md:w-[23rem] lg:w-[25rem] ' src={Astro} alt="astro" />
      </div>
    </div>
  )
}

export default Home
