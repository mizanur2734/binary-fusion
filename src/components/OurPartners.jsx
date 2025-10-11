import React from "react";
import img1 from "../assets/home/ourPartners/t-ranz.png";
import img2 from "../assets/home/ourPartners/realbex.png";
import img3 from "../assets/home/ourPartners/dosheats.png";
import img4 from "../assets/home/ourPartners/dosh-network.png";
import img5 from "../assets/home/ourPartners/yum2go.png";
import img6 from "../assets/home/ourPartners/driveways.png";
import img7 from "../assets/home/ourPartners/pullupngo.png";
import img8 from "../assets/home/ourPartners/pugo-eats.png";
import img9 from "../assets/home/ourPartners/dato-comm.png";
import img10 from "../assets/home/ourPartners/ecualerta.png";
const OurPartners = () => {
  return (
    <div className="md:py-16 py-6 md:mb-6">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="text-black text-[26px] md:text-[40px] text-center font-bold  mb-3 leading-9">
          Our
          <span className="text-green-500"> Partners</span>
        </h2>
        <p className="text-lg opacity-60 leading-7 text-center mt-5">
          Clients who have been with us to date and trust us as their reliable
          partners.
        </p>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
         gap-4 sm:gap-6 md:gap-8 mt-10 px-4">
          {/* partner-1 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img1}
              className="w-full h-full object-contain"
              alt="partner logo 1"
            />
          </div>

          {/* partner-2 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img2}
              className="w-full h-full object-contain"
              alt="partner logo 2"
            />
          </div>

          {/* partner-3 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img3}
              className="w-full h-full object-contain"
              alt="partner logo 3"
            />
          </div>

          {/* partner-4 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img4}
              className="w-full h-full object-contain"
              alt="partner logo 4"
            />
          </div>

          {/* partner-5 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img5}
              className="w-full h-full object-contain"
              alt="partner logo 5"
            />
          </div>

          {/* partner-6 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img6}
              className="w-full h-full object-contain"
              alt="partner logo 6"
            />
          </div>

          {/* partner-7 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img7}
              className="w-full h-full object-contain"
              alt="partner logo 7"
            />
          </div>

          {/* partner-8 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img8}
              className="w-full h-full object-contain"
              alt="partner logo 8"
            />
          </div>

          {/* partner-9 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img9}
              className="w-full h-full object-contain"
              alt="partner logo 9"
            />
          </div>

          {/* partner-10 */}
          <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center">
            <img
              src={img10}
              className="w-full h-full object-contain"
              alt="partner logo 10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
