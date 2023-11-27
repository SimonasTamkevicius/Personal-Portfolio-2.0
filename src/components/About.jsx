import React from 'react'
import NavBar from './NavBar';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <NavBar active="about" />
        <div className='flex flex-col lg:grid grid-cols-12 lg:mt-10 mx-10 lg:mx-5 justify-center items-center'>
            <div className='lg:col-start-6 lg:col-end-12 lg:ml-20 flex flex-col items-center justify-center'>
                <div className='font-semibold wrapper'>
                    <div className='typing-about'>
                        about
                    </div>
                </div>
                <div>
                    <p className='mt-5 text-center text-md xl:text-md intro-text md:leading-8'>
                        I'm currently on a journey to become a developer, pursuing my studies in Computer Science at the University of Guelph.<br></br>My passion lies in web development, and I've had the opportunity to work with a diverse range of technologies thus far.<br></br>

                        Beyond coding, I find joy in immersing myself in the world of sports, with a particular soft spot for basketball.<br></br>

                        I'm always excited to connect, collaborate, and explore new technology. Let's build something together!
                    </p>
                    <div className='flex flex-row justify-center space-x-5 mt-5'>
                        <a href='https://www.linkedin.com/in/simonas-ta/' target='_blank'>
                            <FaLinkedin className='text-5xl linked-in' />
                        </a>
                        <a href='https://github.com/SimonasTamkevicius' target='-blank'>
                            <FaGithub className='text-5xl github' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='lg:col-start-1 lg:col-end-6 flex justify-end items-end'>
                <div className='flex flex-row mx-0 lg:space-x-2 lg:pr-10 pt-36 lg:absolute bottom-0 left-0 image-container'>
                    <div className='image-slide-up'>
                        <img src='/simonasAboutImageNoBackground.png' className='w-56 lg:w-60' />
                    </div>
                    <div className='flex flex-col justify-center items-center relative md:mx-10 lg:mx-0 -top-24 max-w-[250px] speech-bubble speech-bubble-animation'>
                        <h1 className='font-semibold text-md lg:text-xl text-center pl-2 md:text-xl'>check out my <span className='projects-link'><Link to="/projects">projects</Link></span></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;

