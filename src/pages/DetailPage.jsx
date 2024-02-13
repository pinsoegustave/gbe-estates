import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const DetailPage = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const { listingId } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/getListing/${listingId}`);
        const data = await res.json();
        if (data.success === false ) {
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
  }, [])
  return (
    <main className='relative'>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
      {listing && !loading && !error && (
        <Swiper navigation>
          { listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div className='h-[550px]' style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover',}} ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}  
    </main>
  )
}

export default DetailPage