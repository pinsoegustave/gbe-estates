import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";

const Home = () => {
  const houseDetails = [
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../public/assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For Rent",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
    {
      type: "For sale",
      image: "../public/assets/Home.png",
      location: "Kicukiro - Kagarama",
      bedrooms: 4,
      bathrooms: 5,
      saloon: 2,
      Parking: "3 cars",
      Price: "102,000,000",
    },
  ];
  return (
    <div className="relative">
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
      <Link to={'/detail'}>
      <div className="p-4 mx-auto grid grid-cols-3 gap-16 w-[80%] gap-y-10 mb-4" >
      {/* House Card */}
      {houseDetails.map((detail, index) => (
          <div className="" key={index}>
          <div className="relative w-full rounded-lg bg-slateWhite shadow-md ">
            <div className="relative rounded-lg">
              <div className="">
              <img
                src={detail.image}
                alt=""
                className="rounded-lg"
              />
              </div>
              <span className="absolute top-0 bg-slate-100 p-2 mt-4 text-center rounded-sm">
                For sale
              </span>
            </div>
            <div className="ml-2 flex gap-4 mt-1">
            <FaLocationDot className="mt-1.2"/>
              <span>Kicukiro - Kagarama</span>
            </div>
            <h2 className="ml-2 font-semibold text-2xl">Park House</h2>
            <div className="ml-2">
              <ul className="flex flex-wrap ">
                <li>Bedrooms:4</li>,<li>Bathrooms: 4 </li>,
                <li>Sitting rooms:4</li>,<li>Parking: 3 cars</li>
              </ul>
              <h1 className="font-extrabold mt-2">Price: 1,200,000 Frws</h1>
              <button className="p-1 mt-4 mb-2 rounded-sm ml-10 bg-thirdGreen">
                Click for more details
              </button>
            </div>
          </div>
          </div>
      ))}
      </div>
      </Link>
    </div>
  );
};

export default Home;
