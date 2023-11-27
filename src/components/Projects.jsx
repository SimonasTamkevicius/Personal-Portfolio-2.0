import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
  return (
    <div>
      <NavBar active="projects" />
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center font-semibold wrapper lg:mt-10 mx-10 lg:mx-20'>
          <div className='typing-projects'>
            &lt;projects&gt;
          </div>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-20 py-20 space-y-5 md:space-y-0 md:gap-5 overflow-hidden'>
          {/* bead boutique project card */}
          <div className='flex flex-col border-2 border-black rounded-lg shadow-xl project-card-1'>
            <div className='flex flex-col justify-between mx-5 lg:mx-5 space-y-5 my-5'>
                <h1 className='text-2xl font-semibold project-1-title'>the bead boutique</h1>
                <p className='text-sm'>
                    This is a comprehensive e-commerce platform equipped with administrative features, allowing administrators to effortlessly modify and add products, access order information, and manage the customer base.
                </p>
              <div className='flex flex-col'>
                <h1 className='font-bold'>built using:</h1>
                <div className='flex flex-row justify-start items-center space-x-3 mt-2'>
                    <img src='/reactIcon.png' className='h-6' />
                    <img src='/nodeJSIcon.png' className='h-6' />
                    <img src='/mongoDBIcon.png' className='h-6' />
                    <img src='/awsIcon.png' className='h-6' />
                </div>
              </div>
              <a href='https://ecommerce-bead-store.onrender.com' target='_blank' className='flex justify-end items-end'>
                <div className='flex flex-row justify-center items-center space-x-2 border border-black rounded-xl p-2 visit-button'>
                    <p>visit</p>
                    <LuExternalLink className='external-link text-xl font-semibold' />
                </div>
              </a>
            </div>
          </div>
          {/* Comilla Inc. project card */}
          <div className='flex flex-col border-2 border-black rounded-lg shadow-xl project-card-2'>
            <div className='flex flex-col justify-between mx-5 lg:mx-5 space-y-5 my-5'>
                <h1 className='text-2xl font-semibold project-2-title'>comilla inc.</h1>
                <p className='text-sm'>
                    This website was crafted for a client engaged in electrical contracting services. The platform provides the administrator with the capability to seamlessly add new projects and upcoming events.
                </p>
              <div className='flex flex-col'>
                <h1 className='font-bold'>built using:</h1>
                <div className='flex flex-wrap justify-start items-center space-x-3 mt-2'>
                    <img src='/reactIcon.png' className='h-6' />
                    <img src='/nodeJSIcon.png' className='h-6' />
                    <img src='/mongoDBIcon.png' className='h-6' />
                    <img src='/awsIcon.png' className='h-6' />
                </div>
              </div>
              <a href='https://comilla-website.vercel.app' target='_blank' className='flex justify-end items-end'>
                <div className='flex flex-row justify-center items-center space-x-2 border border-black rounded-xl p-2 visit-button'>
                    <p>visit</p>
                    <LuExternalLink className='external-link text-xl font-semibold' />
                </div>
              </a>
            </div>
          </div>
          {/*Coming soon project card*/}
          <div className='flex flex-col border-2 border-black rounded-lg shadow-xl project-card-3 max-h-[75px]'>
            <div className='flex flex-col justify-between mx-5 lg:mx-5 space-y-5 my-5'>
                <h1 className='text-2xl font-semibold project-3-title'>more to come...</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;