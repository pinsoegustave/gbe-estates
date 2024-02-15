import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Topbar() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className=''>
      <div className='bg-white h-16 px-4 flex justify-between items-center'>
        <div className='px-10 text-sm underline'>
          Learn more about Guest satisfactions, the most loved homes on GBE.</div>
        <div className="relative">
          <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
          <input type="text" placeholder='Search...' className="text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-gray-300 rounded-sm pl-11 pr-4 bg-amber-50" />
        </div>
      </div>
      
      <div className='bg-amber-50 h-16 px-4 flex justify-between items-center border-b border-gray-200'>
      <div className='text-xl font-bold px-10'>GBE</div>
      <div className="flex items-center text-gray-400">
        <ul className="topList flex text-black">
          <li className="flex items-center text-black px-3">
            <Link className="link text-black no-underline" to="/">
              Home
            </Link>
          </li>
          <li className="flex items-center text-black px-3">
            <Link className="link text-black no-underline" to="/about">
              About
            </Link>
          </li>
          <li className="flex items-center text-black px-3">
            <Link className="link text-black no-underline" to="/forsale">
              For Sale
            </Link>
          </li>
          <li className="flex items-center text-black px-3">
            <Link className="link text-black no-underline" to="/forrent">
              For Rent
            </Link>
          </li>
          <p className="flex items-center px-3">
            <Link className="bg-gray-700 text-white px-2 py-2 rounded-full flex items-center" to="/profile">
                { currentUser ? (
                  <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
                  ) : ( 
                  // <FaUserCircle className="rounded-full flex items-center" />
                    <li className='sm:inline text-slate-700 hover:underline'>
                Sign in</li>
                )}
            </Link>
          </p>
        </ul>
      </div>
    </div>
    </div>
  )
}
