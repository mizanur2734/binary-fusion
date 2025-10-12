import React from "react";
import img1 from "../assets/home/ourService/development.svg";
import img2 from "../assets/home/ourService/customization.svg";
import img3 from "../assets/home/ourService/installation.svg";
import img4 from "../assets/home/ourService/ui-ux.svg";
const OurServices = () => {
  return (
    <div className="md:py-16 py-8 px-4 lg:px-12">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="text-black text-[26px] md:text-[40px] text-center font-bold mb-3 leading-9">
          Experience
          <span className="text-green-500">
            {" "}
            Our Services <br className="lg:hidden block" />
          </span>
          Tailored to You
        </h2>
        <p className="text-lg opacity-60 leading-7 text-center mt-5">
          Stuck with just an idea? We've got your{" "}
          <br className="lg:hidden block" /> back!{" "}
          <br className="lg:block hidden" /> We offer different services to help
          you launch your business and make it happen.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-7 mt-14">
        {/* card-1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="place-items-center shadow p-8 rounded-xl bg-white border border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-[25%] h-[25%]">
            <img src={img1} className="w-full h-full object-contain" alt="" />
          </div>
          <h3 className="text-2xl lg:text-[22px] font-semibold opacity-80 text-[#1a1a1a] mt-5">
            Development
          </h3>
          <p className="text-lg text-[#555] leading-relaxed opacity-75 text-center mt-2">
            Turn your web and app ideas into a reality with our development
            team.
          </p>
        </div>
        {/* card-2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="place-items-center shadow p-8 rounded-xl bg-white border border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-[25%] h-[25%]">
            <img src={img2} className="w-full h-full object-contain" alt="" />
          </div>
          <h3 className="text-2xl lg:text-[22px] font-semibold opacity-80 text-[#1a1a1a] mt-5">
            Customization
          </h3>
          <p className="text-lg text-[#555] leading-relaxed opacity-75 text-center mt-2">
            Customize your products to fit your exact needs and requirements.
          </p>
        </div>
        {/* card-3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="place-items-center shadow p-8 rounded-xl bg-white border border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-[25%] h-[25%]">
            <img src={img3} className="w-full h-full object-contain" alt="" />
          </div>
          <h3 className="text-2xl lg:text-[22px] font-semibold opacity-80 text-[#1a1a1a] mt-5">
            Installation
          </h3>
          <p className="text-lg text-[#555] leading-relaxed opacity-75 text-center mt-2">
            Kickstart your business now with our seamless installation services.
          </p>
        </div>
        {/* card-4 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="place-items-center shadow p-8 rounded-xl bg-white border border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer"
        >
          <div className="w-[25%] h-[25%]">
            <img src={img4} className="w-full h-full object-contain" alt="" />
          </div>
          <h3 className="text-2xl lg:text-[22px] font-semibold opacity-80 text-[#1a1a1a] mt-5">
            UI/UX Design
          </h3>
          <p className="text-lg text-[#555] leading-relaxed opacity-75 text-center mt-2">
            Attract & retain more customers with our user-friendly website
            design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
