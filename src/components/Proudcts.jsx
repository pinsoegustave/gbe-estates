import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function Proudcts() {
  const [ listing, setListing ] = useState(false);
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    const getListing = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/listing/getAllHouses');
        const data = await res.json();
        if (data === false) {
          setLoading(false);
          return;
        }
        setListing(data);
      } catch (error) {
        setLoading(true);
        
      }
    };
    getListing();
  }, []);
  
  return (
    <div> 
      <div className='container'>
        <h2>List of houses in the database</h2>
        <Link to='/layout/create-listing'>
          <button className='btn btn-success my-3'>Create a new house +</button>
        </Link>
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Regular Price</th>
              <th>Parking</th>
              <th>Type</th>
              <th>ImageUrls</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            listing && listing.map((result, index) => (
              <tr key={index}>
                <td>{result._id.slice(0,5) + ".."}</td>
                <td>{result.name}</td>
                <td>{result.description.slice(0,5) + ".."}</td>
                <td>{result.address}</td>
                {/* <td>{result.furnished === 'true' ? 'Furnished' : 'No'}</td> */}
                <td>{result.parking === 'true' ? 'True' : 'None'}</td>
                <td>{result.type}</td>
                {/* <td>{result.offer}</td> */}
                <td><img src={result.imageUrls[0]} alt="" width={50} height={50} /></td>
                <td className='gap-2'>
                {/* <Link className='text-decoration-none btn btn-sm btn-success'  */}
                    {/* to={`/update/${info._id}`}> */}
                    {/* Update */}
                  {/* </Link> */}
                    <button className='text-decoration-none bg-green-800 text-redBeige rounded-sm' onClick={e => handleDelete(info._id)}>
                      Update
                    </button>
                  <button className='text-decoration-none bg-red-800 text-redBeige rounded-sm' onClick={e => handleDelete(info._id)}>
                      Delete
                    </button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>    
    </div>
  )
}
