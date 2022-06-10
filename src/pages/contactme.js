import React from 'react'

const ContactMe = () => {
    return (
        <div className="bg-gradient-to-b from-white to-green-100 h-screen flex flex-col justify-center items-center">
            <h1 className=" text-center lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                <a href='https://www.linkedin.com/in/nate-pegram'>
                    <div className='hover:text-neutral-400 transition duration-1000 ease-in-out'>
                        linkedin
                    </div>
                </a>
                <br />
                <a href="https://www.github.com/pegsdub">
                    <div className='hover:text-neutral-400 transition animate-wiggle 1s ease-in-out infinite'>
                        github
                    </div>
                </a>
            </h1>
        </div >
    )
}

export default ContactMe