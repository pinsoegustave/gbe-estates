import React from 'react'
import { Link } from 'react-router-dom';
import Topbar from './shared/Topbar';
export default function Proudcts() {
  return (
    <div> 
        <p>this is Proudcts page</p>
        <Link to="/" className='underline'>go to dashboard</Link>
        {/* <Topbar/> */}
        </div>
  )
}
