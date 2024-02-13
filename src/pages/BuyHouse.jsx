import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BuyHouse() {
    const [ formData, setFormData ] = useState({});
    // const [ loading, setLoading ] = useState(false);
    const { id } = useParams();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch(`/api/listing/getHouse/${id}`, {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json', 
              },
              body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);

        } catch (error) {
          
        }
    }


  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className="text-3xl font-semibold text-center my-7">Buy new house</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="name"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Phone Number"
          id="phone"    
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        {/* <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-98"
        >
          {loading ? "Loading..." : "Purchase"}
        </button> */}
        <input type='submit' className="bg-green-700 text-white p-3 rounded-lg uppercase text-center mb-10 hover:opacity-95" />
      </form>
    </div>
  )
}

export default BuyHouse