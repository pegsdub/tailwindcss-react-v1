import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-white to-white h-screen flex flex-col justify-center items-center">
            <h1 className="z-50 lg:text-9xl md:text-7xl text-6xl font-extralight mb-14 bg-gradient-to-r bg-clip-text 
            animate-text">
                nate's plaza
            </h1>
            <div className="bottom-6 flex justify-center items-center relative w-full max-w-lg">
                <div className="z-0 absolute -top-56 left-10 w-72 h-72 rounded-full bg-indigo-100 mix-blend-multiply filter blur-md opacity-50 animate-blob animation-delay-2000">
                </div>
                <div className="z-0 absolute left-64 w-72 h-72 rounded-full bg-green-200 mix-blend-multiply filter blur-md opacity-50 animate-blob">
                </div>
                <div className="z-0 -bottom-52 left-10 absolute w-72 h-72 rounded-full bg-green-100 mix-blend-multiply filter blur-md opacity-50 animate-blob animation-delay-4000">
                </div>
            </div>
            <Link to='/bouncy' className="-m-2 py-3 px-5 bg-transparent font-extralight rounded-full lg:text-2xl md:text-lg base:text-sm hover:bg-green-100 transition duration-1000 ease-in-out flex flex-row items-center animate-bounce shadow-xl">
                <em>snek game</em>
                <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </Link>
        </div>
    );
};

export default Hero;