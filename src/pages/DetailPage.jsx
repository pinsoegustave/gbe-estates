import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaMapMarkedAlt } from "react-icons/fa";

const DetailPage = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { listingId } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/getListing/${listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, []);
  return (
    <main className="relative">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      { listing && !loading && !error && (
        <div className="">
          <Swiper navigation>
            { listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize:   'cover',
                }}
                ></div>
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="mx-16 p-16 border border-red-300">
          <div className="flex gap-4">
            <p className="bg-pinkRed w-full max-w-[200px] h-[40px] text-darkBlue font-semibold text-center p-1 rounded-md">
              { listing.type === 'rent' ? 'For rent' : 'For sale'}
            </p>
          </div>
          <h1 className="text-3xl font-semibold mt-10">{listing.name}</h1>
          <p className="bg-pinkRed w-full max-w-[200px] h-[40px]  text-darkBlue font-semibold text-center p-1 rounded-md mt-10">
              { listing.regularPrice}0,000,000 $
          </p>
          <div className="">
          <h2 className="font-semibold text-xl mt-8">Property details</h2>
          <span className="mt-2 max-w-[160px] border border-slate-500 flex"></span>
          </div>
          <div className="flex mt-10 gap-10 ">
            <div className="w-full max-w-[400px]">
              <div className="flex justify-between">
                <p className="font-semibold">Bedrooms: </p>
                  <span>{listing.bedrooms}</span>
              </div>
              <span className="mt-2 border border-slate-500 flex"></span>
              <div className="flex justify-between mt-2">
                <p className="font-semibold ">Bathrooms: </p>
                  <span>{listing.bathrooms}</span>
              </div>
              <span className="mt-2 border border-slate-500 flex"></span>
              <div className="flex justify-between mt-2">
                <p className="font-semibold">Parking: </p>
                  <span>{listing.parking === 'true' ? 'True' : 'No parking'}</span>
              </div>
              <span className="mt-2 border border-slate-500 flex"></span>
              <div className="flex justify-between mt-2">
                <p className="font-semibold">Furnished: </p>
                  <span className="left-0">4</span>
              </div>
                <span className="mt-2 border border-slate-500 flex"></span>
            </div>
            <div className="w-full max-w-[400px]">
              
              <div className="flex justify-between">
                <p className="font-semibold">Ceiling height: </p>
                  <span>3m</span>
              </div>
                <span className="mt-2 border border-slate-500 flex"></span>
              <div className="flex justify-between mt-2">
                <p className="font-semibold">Wi-Fi: </p>
                  <span>Yes</span>
              </div>
                <span className="mt-2 border border-slate-500 flex"></span>
              <div className="flex justify-between mt-2">
                <p className="font-semibold">Construction year: </p>
                  <span>2022</span>
              </div>
                <span className="mt-2 border border-slate-500 flex"></span>
            </div>
          </div>
          <Link to={`/purchase/${listing._id}`}>
          <button className="bg-slateWhite mt-20 w-full max-w-[200px] h-[40px] font-semibold text-center p-1 rounded-md">Buy now</button>
          </Link>
            
        </div>
        </div>
      )}
    </main>
  );
};

export default DetailPage;
