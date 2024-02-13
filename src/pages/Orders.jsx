import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'

const Orders = () => {
  return (
    <div className='fixed'>
      <Layout />
       <p>Orders page to be rendered. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus et debitis dolorem ipsam earum delectus maiores qui reiciendis numquam explicabo error obcaecati saepe voluptatibus excepturi nulla sapiente, omnis provident.</p> 
        <Link to={'/layout'} className='underline'>Go back to dashboard</Link>
    </div>
  )
}

export default Orders
