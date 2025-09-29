import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black py-20">
      <div className="grid lg:px-12 px-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
        {/* 1 */}
        <div>
          <h2 className="text-4xl font-semibold min-h-[50px]">
            <span className="text-green-600">B</span>inary{" "}
            <span className="text-green-600">f</span>usion
          </h2>
          <p className="lg:mt-8 mt-6 text-lg opacity-75">
            Binary Fusion is a client- <br />
            based software company <br /> that develops complete <br />{" "}
            solutions, apps, websites, etc.
          </p>
          <h4 className="mt-6 text-2xl font-semibold">Socail</h4>
          <div className="flex gap-4 text-xl mt-4">
            <p className="rounded-full bg-green-600 justify-center items-center p-2">
              <BiLogoFacebook />
            </p>
            <p className="rounded-full bg-green-600 justify-center items-center p-2">
              <FaLinkedinIn />
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-2xl font-semibold min-h-[50px]">Main Office</h3>
          <div className="flex items-center gap-2 lg:mt-8 mt-6">
            <p className="text-green-600 text-[24px] -mt-14">
              <MdLocationPin />
            </p>
            <p className="text-lg opacity-75">
              House#31, Road#1, <br /> Block#B, Aftab Nagar, <br /> Dhaka -1212,
              Bangladesh
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <p className="mt-1 text-xl text-green-600">
              <HiOutlineMail />
            </p>
            <p className="text-lg opacity-75">info@binary-fusion.com</p>
          </div>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-2xl font-semibold min-h-[50px]">
            Australia Office
          </h3>
          <div className="flex items-center gap-2 lg:mt-8 mt-6">
            <p className="text-green-600 text-[24px] -mt-14">
              <MdLocationPin />
            </p>
            <p className="text-lg opacity-75">
              7A Narooma Street, Gregory <br /> Hills, NSW, Post Code: 2557,{" "}
              <br /> Australia
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-green-600 text-[24px] mt-6">
              {" "}
              <MdCall />
            </p>
            <p className="mt-6 text-lg opacity-75">+61 (04) 5108 3400</p>
          </div>
        </div>

        {/* 4 */}
        <div>
          <h3 className="text-2xl font-semibold min-h-[50px]">USA Office</h3>
          <div className="flex items-center gap-2 lg:mt-8 mt-6">
            <p className="text-green-600 text-[24px] -mt-14">
              <MdLocationPin />
            </p>
            <p className="text-lg opacity-75">
              695 Mansell Rd, Ste. 230, <br /> Roswell, GA 30076, <br /> U.S.A.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-12 px-6 lg:mt-20 mt-10">
        <div className="w-full h-[1px] bg-white opacity-30"></div>
      </div>
      <p className="text-center lg:mt-10 mt-6">
        <span className="text-xl text-white opacity-60 ">© 2025 All Rights Reserved by</span> 
         <span className="text-green-600 text-[22px]"> Binary Fusion</span>
      </p>
    </div>
  );
};

export default Footer;
