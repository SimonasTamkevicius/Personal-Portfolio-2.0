import React from 'react';
import NavBar from './NavBar';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavBar active="home" />
      <div className='flex flex-col lg:grid grid-cols-12 lg:mt-20 mx-10 lg:mx-20 justify-center items-center'>
        <div className='col-span-5 rounded-full overflow-hidden lg:mt-0 w-52 h-52 md:h-64 md:w-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-2 border-black'>
          <img src='/simonasDrawnImageRed.jpeg' alt='Logo' />
        </div>
        <div className='col-span-7 flex flex-col justify-center items-center lg:items-start mt-10 lg:mt-0'>
                <div className='font-semibold wrapper'>
                    <div className='typing-home'>
                        simonas tamkevicius
                    </div>
                </div>
            <p className='mt-5 max-w-[700px] text-center lg:text-start xl:text-lg intro-text'>
                Hello! I'm Simonas, a full-stack developer dedicated to creating remarkable digital experiences. Feel free to browse through my portfolio, and let's collaborate on something extraordinary! 
            </p>
            <Link to="/about" className='flex flex-row space-x-1 justify-center items-center mt-10 more-about-me'>
                <p>more about me</p>    
                <FaArrowRight className='arrow' />  
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
