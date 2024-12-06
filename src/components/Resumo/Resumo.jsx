import React from 'react'
import transition from '../../transition'
import "./style.css"

const Resumo = () => {
  return (
    <div className='h-[calc(100vh-150px)]'>
        <div>
            <h1 id='title-about' className='flex items-center justify-center w-screen text-center mb-10 text-[#F5F5F5]  font-bold text-5xl mt-10'>Passion, Fuels and Pupose!</h1>
        </div>

        <div id='container-about' className='flex justify-between w-screen font-light'>
          <div className='w-[40vw]'>
          <h2 id='bio' className=' text-2xl text-[#F5F5F5BF] mb-2'>BIOGRAPHY</h2>
          <p id='text-one' className=' text-white text-justify'>Hi, I'm <p className='font-extrabold text-[#0086B0]'>André Carlos, </p>a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. 
            I am always looking for new and innovative ways to bring my clients' visions to life.</p>
          </div>

          <div className=' w-[40vw]'>
            <p id='text-two' className='text-justify text-white mt-10'>I believe that design is about more than just making things look pretty – it's 
              about solving problems and creating intuitive, enjoyable experiences for users. 
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on.
            </p>
          </div>

        </div>

        <div id='bloco-bio' className='inline-flex gap-10 justify-center'>
          <div>
            <span className='inline-block text-7xl font-bold text-[#0086B0]'>
                5+
            </span>
            <h2 id='one-project' className='text-[#F5F5F5BF]'>projects completed</h2>
          </div>
          <div>
            <span className='inline-block text-7xl font-bold text-[#0086B0]'>
                1+
            </span>
            <h2 id='years-xp' className='text-[#F5F5F5BF]'>years of experiences</h2>
          </div>

          </div>
    </div>
  )
}

export default transition(Resumo);
