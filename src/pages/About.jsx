import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <div
        className="bg-cover bg-center py-16 text-black text-center"
        style={{
          backgroundImage:
            "url('https://www.houseplans.net/news/wp-content/uploads/2023/09/65544-768.jpeg')",
        }}
      >
        <h2 className="text-3xl  font-semibold">We GBE Real Estate</h2>
      </div>
      {/* About Section */}
      <div className="p-16 bg-slate-200 rounded">
        <h2 className="text-4xl font-bold mb-3">About Us</h2>
        <p className="mb-2 font-sans">
          Welcome to Gustave Bella Real Estate, where we believe in turning your
          dreams of owning a perfect property into reality. As a leading real
          estate agency, we take immense pride in providing top-notch services
          to buyers, sellers, and investors, making us a one-stop solution for
          all your property needs.
        </p>
        <h3 className="text-3xl font-bold mb-3">Our Vision</h3>
        <p className="mb-2 font-sans">
          Our vision is to be the most trusted and respected real estate agency
          in our region. We aim to achieve this by delivering exceptional
          services, maintaining transparency, and upholding the highest ethical
          standards. Your satisfaction is our ultimate goal.
        </p>
        <h3 className="text-2xl font-bold mb-3">Mission</h3>
        <p className="mb-2 font-sans">
          Our mission is to empower our clients to make informed decisions in
          the real estate market. We strive to provide accurate and up-to-date
          information, expert advice, and personalized solutions that align with
          your unique requirements.
        </p>
        <h3 className="text-xl font-bold mb-3">Our Services</h3>
        <div className="text-black">
          <div className="flex flex-col mb-2">
            <h4 className="font-semibold mb-1">Property Buying and Selling</h4>
            <p className="font-sans">
              We assist you in finding your dream property and ensure a smooth
              transaction process when selling your property.
            </p>
          </div>
          <div className="flex flex-col mb-2">
            <h4 className="font-semibold mb-1">Property Valuation</h4>
            <p className="font-sans">
              Our certified buyers provide accurate and unbiased property
              valuation services to help you determine the true market value of
              your assets.
            </p>
          </div>
          <div className="flex flex-col mb-2">
            <h4 className="font-semibold mb-1">Property Management</h4>
            <p className="font-sans">
              For property owners, we offer comprehensive management services to
              ensure hassle-free maintenance and rental management.
            </p>
          </div>
          <div className="flex flex-col mb-2">
            <h4 className="font-semibold mb-1">Investment Advisory</h4>
            <p className="font-sans">
              Our expert consultants provide strategic investment advice to help
              you maximize returns and achieve your financial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
