import React from 'react'
import { Link } from 'react-router-dom'

const Me = () => {
    return (
        <div className='h-screen w-screen overflow-scroll text-stone-700'>
            <div className='snap-start w-screen h-screen flex items-center justify-center'>
                <h1 className="px-8 text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-green-200">
                    i am a lover of all things green...
                </h1>
            </div>
            <div className='snap-start bg-rose-200 w-screen h-screen flex items-center justify-center'>
                <h1 contenteditable='true' className="px-8 text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-white">
                    i welcome change in my life, which is why i am currently learning web-development even without having a background in computer science
                </h1>
            </div>
            <div className='snap-start bg-green-100 w-screen h-screen flex items-center justify-center'>
                <h1 className="px-8 text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-indigo-200">
                    i currently am learning JavaScript, React, TailwindCSS, and HTML...
                </h1>
            </div>
            <div className='snap-start bg-indigo-100 w-screen h-screen flex items-center justify-center'>
                <h1 className="px-8 text-center lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 underline decoration-white">
                    i love to spend my freetime talking with my plants, working out, and reading on the beach...
                </h1>
            </div>
            <div className='snap-start bg-white w-screen h-screen flex items-center justify-center'>
                <h1 className="p-8 m-12 rounded-full bg-gradient-to-r from-rose-200 via-green-100 to-indigo-200 text-center shadow-xl lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-extralight mb-14 animate-bounce">
                    <Link to='/creations'> check out some of the projects that i have created</Link>
                </h1>
            </div>
        </div>
    )
}

export default Me