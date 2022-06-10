import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-green-100 shadow-md hover:grid-rows-3' : 'hidden'} onClick={toggle}>
            <Link className="p-4" to="/creations">creations</Link>
            <Link className="p-4" to="/me" >me :P</Link >
            <Link className="p-4" to="/contactme" >contact me</Link >
        </div>
    )
}

export default Dropdown
