import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
        <nav className='m-4 p-2 flex rounded-xl justify-between items-center h-16 bg-transparent text-black relative shadow-inner shadow-lg font-extralight' role='navigation'>
            <Link to='/' className="p-8 hover:text-indigo-400 transition duration-700 ease-in-out">
                hello :)
            </Link>
            <div className="px-4 cursor-pointer md:hidden"
                onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:text-indigo-400 transition duration-700 ease-in-out " to="/creations">creations</Link>
                <Link className="p-4 hover:text-indigo-400 transition duration-700 ease-in-out " to="/me" >who i am</Link >
                <Link className="p-4 hover:text-indigo-400 transition duration-700 ease-in-out " to="/contactme" >contact me</Link >
            </div >
        </nav >
    );
}

export default Navbar