import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios'
import DetailPage from "./DetailPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  
  const [showListingError, setShowListingError] = useState(false);
  const [userListings, setUserListings] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/listing/getAllHouses');
        const data = await res.json();
        if (data === false) {
          setShowListingError(true)
          setLoading(false);
          return;
        }
        setUserListings(data)
      }  
      catch (error) {
        setShowListingError(true);
        setLoading(false)
      }
    };
    fetchListing();
  }, []);
  
  return (
    <div className="relative">
      {/* <Header /> */}
      <img src="../public/assets/Home.png" alt="" className="w-full h-screen" />
      <div className="absolute p-2 top-0 mt-40 sm:mt-20 w-80 bg-thirdGreen rounded-lg shadow-md right-0 mr-32">
        <h2 className="text-2xl font-extralight text-center">
          Welcome to GBE,
        </h2>
        <h2 className="text-4xl font-regular text-center">Real Estate</h2>
        <p className="mt-2 ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage,and going through
          the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <button className="m-2 sm:w-40 p-2 mt-10 ml-16 bg-redBeige">
          Explore more
        </button>
      </div>
          <h2 className="text-3xl font-semibold m-10 text-center">
            Better home, more pride
          </h2>
      <div className="p-4 mx-auto grid grid-cols-3 gap-16 w-[80%] gap-y-10 mb-4" >
      {/* House Card */}
      {
        userListings
      && userListings.map((listing, index) => (
        <Link to={`/detail/${listing._id}`}>
          <div className="" >
          <div className="relative w-full rounded-lg bg-slateWhite shadow-md ">
            <div className="relative rounded-lg">
              <div className="" key={index}>
              <img
                src={listing.imageUrls[0]}
                alt=""
                className="rounded-lg"
              />
              </div>
              <span className="absolute top-0 bg-slate-100 p-2 mt-4 text-center rounded-sm">
                For {listing.type}
              </span>
            </div>
            <div className="ml-2 flex gap-4 mt-1">
            <FaLocationDot className="mt-1.2"/>
              <span>{listing.address}</span>
            </div>
            <h2 className="ml-2 font-semibold text-2xl">{listing.name}</h2>
            <div className="ml-2">
              <ul className="flex flex-wrap ">
                <li>Bedrooms:{listing.bedrooms}</li>,<li>Bathrooms: {listing.bathrooms} </li>,
                <li>Sitting rooms:4</li>,<li>Parking:{listing.parking}</li>
              </ul>
              <h1 className="font-extrabold mt-2">Price: 1,200,000 Frws</h1>
              <button className="p-1 mt-4 mb-2 rounded-sm ml-10 bg-thirdGreen">
                Click for more details
              </button>
            </div>
          </div>
          </div>
      </Link>
      ))
      } 
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
