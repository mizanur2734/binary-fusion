import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import banner from "../assets/home/banner/banner-illustration.png";
const Banner = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="lg:mt-20 mt-12 py-12 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row md:items-center text-left">
        {/* Text */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full md:text-center lg:text-left px-4 md:px-0"
        >
          <h2 className="font-bold mb-3 leading-8 md:leading-[56px]">
            <span className="font-normal opacity-90 text-[22px] sm:text-[28px] md:text-[40px]">
              We Develop Software <br className="lg:hidden block" /> Solutions{" "}
              <br className="lg:block" />
            </span>
            <span className="text-black text-[26px] sm:text-[28px] md:text-[48px]">
              That Your <br className="lg:hidden block" /> Business{" "}
              <br className="lg:block hidden" /> Needs
            </span>
          </h2>
          <p className="text-base md:text-[17px] opacity-60 leading-6 sm:leading-7">
            Binary Fusion is a software company that uses the newest tech and
            skilled experts to <br className="lg:block hidden" /> create
            powerful solutions that help businesses grow bigger and better.
          </p>
          <div className="flex md:mt-10 mt-8 gap-6">
            <button className="btn bg-green-600 text-white px-7 py-6 text-[16px]">
              Our Projects
            </button>
            <button className="btn hover:bg-green-600 bg-white text-green-600 border border-green-600 px-7 py-6 text-[16px]">
             About Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full md:w-[600px] h-[400px] bg-cover bg-center relative rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${banner})` }}
        >
          {/* <div className="absolute bottom-0 left-0 right-0 h-[80%] w-[1000%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
