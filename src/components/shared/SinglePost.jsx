import React from 'react'
import { useLocation } from 'react-router'
import Topbar from './Topbar'
export default function SinglePost() {
    const location = useLocation();
  console.log(location);
  return (
    <>
        <Topbar/>
    </>
  )
}
