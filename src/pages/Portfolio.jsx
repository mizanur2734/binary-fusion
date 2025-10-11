import React from "react";
import doshNetwork from "../assets/portfolio/dosh-network-portfolio-bg.jpg";
import tRanze from "../assets/portfolio/t-ranz-portfolio-bg.jpg";
import doshEats from "../assets/portfolio/dosh-eats-portfolio-bg.jpg";
import isCholaris from "../assets/portfolio/ischolaris-portfolio-bg.jpg";
import canviarDynasty from "../assets/portfolio/caviar-dynasty-bg.jpg";
import nstnPortfolio from "../assets/portfolio/nstn-portfolio-bg.jpg";
import realBex from "../assets/portfolio/realbex-bg.jpg";
import trashyTenant from "../assets/portfolio/trashy-tenant-bg.jpg";
import yahooeatst from "../assets/portfolio/yahooeats-bg.jpg";
import driveways from "../assets/portfolio/driveways-bg.jpg";
import pediatric from "../assets/portfolio/pediatric-bg.jpg";

const Portfolio = () => {
  return (
    <div>
      <section className="container mx-auto px-4 lg:px-12">
        <div className="lg:mt-28 mt-26">
          <h2 className="text-black text-[28px] md:text-[42px] font-bold mb-3 leading-9">
            <span className="text-green-500">See Our Works</span>- Imagine{" "}
            <br className="lg:hidden block" /> Yours
          </h2>
          <p className="text-lg opacity-60 leading-8">
            From design to development, explore our portfolio of awesome
            projects.
          </p>
          {/* Dosh-Network-card-1 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-6"
            style={{ backgroundImage: `url(${doshNetwork})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                Dosh Network
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
                OTT | Web Development | WordPress | App Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-dosh-network"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* T-Range-card-2 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${tRanze})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                T Ranz
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
                Car Rental | UI/UX Design | Web Design | Web Development | App Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-tranz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Dosh-Eath-card-3 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${doshEats})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                Dosh Eats
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
                Online Food Ordering | Web Development | App Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-dosh-eats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Is-Cholaris-card-4 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${isCholaris})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                iScholaris
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
               eLearning | Web Development | WordPress
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-ischolaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Can-ViarDynasty-card-5 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${canviarDynasty})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                Caviar Dynasty
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
              eCommerce | Web Design | Web Development | Shopify
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-caviar-dynasty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Nstn-Portfolio-card-6 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${nstnPortfolio})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                NSTN
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
              Web development | WordPress
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-nstn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Real-Bex-card-7 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${realBex})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
               RealBex
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
              Real Estate | Web design | Web Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-realbex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* Trashy-Tenant-card-8 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${trashyTenant})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
                Trashy Tenant
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
               Web Design | Web Development | WordPress
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-trashy-tenant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* yahooeatst-card-9 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${yahooeatst})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
               Yahooeats
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
              Online Food Ordering | Web Design | Web Development | App Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-yahooeats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* yahooeatst-card-10 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${driveways})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
              DriveWays
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
             On Demand | App Development
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-driveways"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
          {/* yahooeatst-card-11 */}
          <div
            className="w-full h-[350px] md:h-[300px] bg-cover bg-center relative rounded-xl mt-4"
            style={{ backgroundImage: `url(${pediatric})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start text-center px-6 md:px-24 md:-mt-12 mt-8">
              <h1 className="title text-[30px] md:text-[45px] font-bold ">
               Pediatric Endocrinology Associates
              </h1>
              <p className="md:mt-3 mt-2 md:text-xl text-sm text-white">
             Doctor Appointment Scheduler | Web Development | WordPress
              </p>
              <a
                href="https://binary-fusion.com/portfolio-details-pediatric"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 md:mt-6 mt-4
                 hover:bg-black text-white font-semibold md:py-4 md:px-8 py-3 px-6 md:w-48 w-44 rounded-full 
                 transition duration-200 text-[17px]"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
