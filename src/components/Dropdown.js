import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'rounded-md grid grid-rows-3 text-center items-center m-2 mx-8  text-black font-extralight shadow-md hover:grid-rows-3' : 'hidden'} onClick={toggle}>
            <Link className="mx-0 mt-1 rounded-full  bg-green-100 shadow-inner border-4 border-white p-2  shadow-md hover:text-indigo-400 transition duration-700 ease-in-out" to="/creations">creations</Link>
            <Link className="mx-0 rounded-full  bg-green-100 shadow-inner border-4 border-white p-2  shadow-md hover:text-indigo-400 transition duration-700 ease-in-out" to="/me" >who i am</Link >
            <Link className="mx-0 rounded-full bg-green-100 shadow-inner border-4 border-white p-2 shadow-md hover:text-indigo-400 transition duration-700 ease-in-out" to="/contactme" >contact me</Link >
        </div>
    )
}

export default Dropdown
