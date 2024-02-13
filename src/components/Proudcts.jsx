import React from 'react'
import { Link } from 'react-router-dom';
import Topbar from './shared/Topbar';
export default function Proudcts() {
  return (
    <div> 
        <p>this is Products page</p>
        <Link to="/layout" className='underline'>go to dashboard</Link>
        {/* <Topbar/> */}
        </div>
  )
}
