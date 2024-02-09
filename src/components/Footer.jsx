import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-thirdGreen text-black py-6 mt-auto">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            {/* First Column - Useful Links */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
              <ul className="">
                <li className="mb-2">
                  <Link className="link  no-underline" to="/home">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link className="link  no-underline" to="/about">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="link  no-underline" to="/forsale">
                    For Sale
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="link  no-underline" to="/forrent">
                    For Rent
                  </Link>
                </li>
              </ul>
            </div>
            {/* Second Column - Services */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Our Services</h2>
              <div className="">
                <div className="flex flex-col mb-2">
                  <h3 className=" mb-1">
                    Property Buying and Selling
                  </h3>
                  {/* Description can be added here */}
                </div>
                <div className="flex flex-col mb-2">
                  <h3 className=" mb-1">Property Valuation</h3>
                  {/* Description can be added here */}
                </div>
                <div className="flex flex-col mb-2">
                  <h3 className=" mb-1">Property Management</h3>
                  {/* Description can be added here */}
                </div>
                <div className="flex flex-col mb-2">
                  <h4 className=" mb-1">Investment Advisory</h4>
                  {/* Description can be added here */}
                </div>
              </div>
            </div>
            {/* Third Column - Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <div className="text-black">
                <p className="mb-3">
                  <strong>Phone:</strong> +1 234 567 890
                </p>
                <p className="mb-3">
                  <strong>Email:</strong> gbestates@gmail.com
                </p>
                <p className="mb-3">
                  <strong>Address:</strong> KK 346 ST Kanombe
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center display-flex justify-center p-3 cursor-pointer">
            <FaFacebook className="mx-12 text-3xl" />
            <FaInstagramSquare className="mx-12 text-3xl" />
            <FaSquareXTwitter className="mx-12 text-3xl" />
            <FaLinkedin className="mx-12 text-3xl" />
          </div>
        </div>
      </footer>
      <div className="border border-black w-full "></div>
      <div className=" bg-thirdGreen font-semibold text-medium px-8 p-4">
        <p className="ml-24">Copyright &copy; 2024, GBE. All rights reserved.</p>
      </div>
    </div>
  );
}
