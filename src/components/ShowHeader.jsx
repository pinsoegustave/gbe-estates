import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ShowHeader({ children }) {
    const location = useLocation();
    const [ showNavbar, setShowNavbar ] = useState(false)

    useEffect(() => {
        if (location.pathname === '/layout' || location.pathname === '/layout/products' || location.pathname === '/layout/orders' || location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/layout/create-listing') {
            setShowNavbar(false)
        }
        else {
            setShowNavbar(true)
        }
    }, [location]);
  return (
    <div>{ showNavbar && children}</div>
  )
}
