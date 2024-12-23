import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';



const Hero = () => {

  return (

    <div className='flex flex-col  items-center overflow-hidden mt-12 lg:mt-20'>
        {/* Text area */}
         <h1 className='sm:w-[1000px]  text-3xl sm:text-6xl lg:text-7xl text-center  tracking-wide'>
            VirtualR build tools 
           <span className=' text-center bg-gradient-to-r  from-orange-500 to-red-800 text-transparent bg-clip-text '> 
             {" "}
            for developers </span>
         </h1>
            <p className='mt-7 text-[13px] sm:text-lg text-center text-neutral-500 max-w-md sm:max-w-3xl lg:max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality
            </p>
          {/* Buttons */}
           <div className='flex space-x-4 sm:space-x-8'> 
          <button className='buttons my-10 text-[14px]'>
               Start for free
          </button>
          <button classNamee='flex '>
               <h1 className='border border-white bg-black py-3 px-4  text-[14px]  rounded-md'> Documentation </h1>
          </button>    
           </div>
            {/* Videos */}
            <div className='flex items-center  text-center  ' >
                <div className="grid items-center md:space-x-10  grid-cols-1 md:flex md:justify-center mt-10" >

            <video
            autoPlay
            loop
            muted
            src={video1}
             className="rounded-lg w-[350px]  lg:w-[600px] border border-orange-700 shadow-orange-400  my-4"
          ></video>
           <video
            autoPlay
            loop
            muted
            src={video2}
          className="rounded-lg   w-[350px]  lg:w-[600px] border border-orange-700 shadow-orange-400  my-4"
       ></video>
                </div>
       </div>

    </div>
  )
}

export default Hero


