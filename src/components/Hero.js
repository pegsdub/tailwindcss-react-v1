import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-white to-green-100 h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                nate's plaza
            </h1>
            <Link to='/bouncy' className="py-6 px-10 bg-green-400 rounded-full text-2xl hover:bg-green-200 transition duration-1000 ease-in-out flex items-center animate-bounce shadow-xl">
                <em>this is cool</em>
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </Link>
        </div>
    );
};

export default Hero;