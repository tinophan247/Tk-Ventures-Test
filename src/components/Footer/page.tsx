import React from "react";
import Logo2 from "../Icons/Logo2";

const Footer = () => {
  return (
    <div className="w-full h-32 bg-gradient-to-r from-red-btn to-orange-btn py-6 ">
        <div className="flex justify-center">
        <Logo2 />
        </div>
        <div className="mt-6 text-base text-white flex justify-center font-extralight">
          FAQ | Newsletter | Advertise | Contact Us | Press Kit | Privacy |
          Terms
        </div>
        <div className="mt-6 flex justify-center text-base text-white opacity-50 font-extralight">© 2021 PlayToEarn.net - all rights reserved</div>
    </div>
  );
};

export default Footer;
