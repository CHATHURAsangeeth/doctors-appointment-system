import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/**left section */}
        <div>
          <img className="mb-5 w-64 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CareConnect is your trusted health platform for discovering specialist doctors, booking appointments, and managing your healthcare — all in one place.
          </p>
        </div>

        {/**center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/**right section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>0111-111111</li>
                <li>info@CareConnect.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/**copyright text */}
        <hr />
        <p className="text-center py-5 text-sm">Copyright 2026@ CareConnect - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
