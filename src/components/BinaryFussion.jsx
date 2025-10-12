import React from "react";
import binaryFussion from "../assets/home/binaryFusion/world-wide.png";
import dot from "../assets/home/binaryFusion/dot.png"
const BinaryFussion = () => {
  return (
    <div className="container mx-auto md:py-16 py-6 px-4">
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-36">
    {/* Image */}
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative w-full sm:w-[450px] md:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center rounded-xl mt-6"
      style={{ backgroundImage: `url(${binaryFussion})` }}>
        {/* Dot Image */}
        <div className="lg:block hidden absolute top-0 left-1/2 transform -translate-x-1/2 -mt-9 w-40 h-12" style={{ backgroundImage: `url(${dot})` }}>

        </div>
        {/* <img src={dot} className="" alt="" /> */}
    </div>

    {/* Text */}
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="w-full sm:w-[450px] md:w-[500px] mt-0 lg:-mt-8 text-center lg:text-left"
    >
      <h2 className="text-black text-[22px] sm:text-[28px] md:text-[40px] font-bold mb-3 leading-8 md:leading-9">
        Binary Fusion
        <span className="text-green-500"> at a Glance</span>
      </h2>
      <p className="text-base sm:text-lg opacity-60 leading-6 sm:leading-7 mt-4 sm:mt-5">
        Here is a sneak peek of who we are & what we do and how we can help
        you scale up your business using our technical services.
      </p>
    </div>
  </div>
</div>

  );
};

export default BinaryFussion;
