import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        {
            key : "home",
            label : "Home",
            path: "/",
        },
        {
            key : "about",
            label : "About Us",
            path: "/about",
        },
        {
            key : "services",
            label : "Services",
            path: "/service",
        },
        {
            key : "sale",
            label : "For Sale",
            path: "/sale",
        },
        {
            key : "rent",
            label : "For rent",
            path: "/",
        },

    ]
  return (
    <div>
        <div className='flex'>
            <p><u>Learn more about Guest satisfactions, the most loved homes on GBE</u></p>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <FaSearch className='' />
                <input type="text" placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            </form>
        </div>
        <div className='bg-slate-orange'>
            <strong>GBE</strong>
                {
                    navLinks.map((link) => (
                    <ul key={link.key}>
                        <Link to={link.path}>
                            <li>{link.label}</li>
                        </Link>
                    </ul>
                    ))
                }
        </div>

    </div>
  )
}

export default Navbar