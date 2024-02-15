import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [ orders, setOrders ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const getOrders =async () => {
      try {
        setLoading(true);
        const result = await fetch('/api/listing/getAllOrders');
        const data = await result.json();
        if (data === false) {
          setLoading(false);
          return;
        }
        setOrders(data);
      } catch (error) {
        setLoading(true)
      }
    };
    getOrders();
  }, [])

  return (
    <div>
       <div className='container mt-1'>
        <h2 className='font-semibold'>Orders from the customer</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customers name</th>
                <th>Customer Email</th>
                <th>Customer Phone number</th>
                <th>House Needed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { orders && orders.map((cust, index) => (
                <tr key={index}>
                  <td>{cust._id.slice(0, 10) + "..."}</td>
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.house}</td>
                  <td>
                    <button>Update</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
              </tr>
            </tbody>
            
          </table>
       </div>
    </div>
  )
}

export default Orders
