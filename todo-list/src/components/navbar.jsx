import React from 'react'
const Navbar = () =>{
    return (
        <nav className='flex justify-around bg-red-500 text-white py-2'>
            <div className="logo">
                <span className='text-xl font-bold mx-8'>TaskMan</span>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar