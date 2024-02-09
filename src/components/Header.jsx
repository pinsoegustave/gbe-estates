import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const { currentUser } = useSelector(state => state.user)
  return (
    <header className='bg-thirdGreen shadow-md'>
        <div className='flex justify-between items-center max-w-5xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='font-extrabold'>GBE</span>
            {/* <span className='text-slate-700'>state</span> */}
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center border-slate-300">
            <input type="text" placeholder='Search....'
            className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch />
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/service'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Services</li>
            </Link>
            <Link to='/profile'>
                { currentUser ? (
                    <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
                ) : ( 
                    <li className='sm:inline text-slate-700 hover:underline'>
                Sign in</li>
                )}
            </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header