import React from "react";
import doshNetwork1 from "../assets/portfolio/dosh-network-portfolio-bg.jpg";
import doshNetwork2 from "../assets/portfolio/ischolaris-portfolio-bg.jpg";
import doshNetwork3 from "../assets/portfolio/dosh-eats-portfolio-bg.jpg";
import doshNetwork4 from "../assets/portfolio/t-ranz-portfolio-bg.jpg";
import doshNetwork5 from "../assets/portfolio/caviar-dynasty-bg.jpg";
import doshNetwork6 from "../assets/portfolio/realbex-bg.jpg";
import doshNetwork7 from "../assets/portfolio/nstn-portfolio-bg.jpg";
//
import projectImage1 from "../assets/home/project/dosh-network.png";
import projectImage2 from "../assets/home/project/ischolaris.png";
import projectImage3 from "../assets/home/project/dosh-eats.png";
import projectImage4 from "../assets/home/project/t-ranz.png";
import projectImage5 from "../assets/home/project/caviar-dynasty.webp";
import projectImage6 from "../assets/home/project/realbex.png";
import projectImage7 from "../assets/home/project/nstn.png";
import { Link } from "react-router";
//

const ProjectsShop = () => {
  const cards = [
    { id: 1, bg: doshNetwork1, img: projectImage1 },
    { id: 2, bg: doshNetwork2, img: projectImage2 },
    { id: 3, bg: doshNetwork3, img: projectImage3 },
    { id: 4, bg: doshNetwork4, img: projectImage4 },
    { id: 5, bg: doshNetwork5, img: projectImage5 },
    { id: 6, bg: doshNetwork6, img: projectImage6 },
    { id: 7, bg: doshNetwork7, img: projectImage7 },
  ];
  return (
    <div className="container mx-auto md:py-12 py-6">
      <h2
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-black text-[26px] md:text-[40px] text-center font-bold  mb-3 leading-9"
      >
        Projects
        <span className="text-green-500"> We’ve Nailed ...</span>
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-lg opacity-60 leading-7 text-center mt-5"
      >
        Our software solutions are always updated with features that keep{" "}
        <br className="md:block hidden" /> your business ahead of the latest
        online trends.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 md:mt-12 mt-6 px-4"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-aos="fade-up"
            data-aos-duration="2000"
            className="relative w-full h-[150px] md:h-[150px] bg-cover bg-center rounded-xl 
            overflow-hidden cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-xl transition-all duration-300 hover:bg-black/30"></div>

            {/* Content */}
            <Link to={"https://binary-fusion.com/portfolio-details-ischolaris"} className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-10">
              <img
                src={card.img}
                className="h-12 w-auto max-w-[120px] object-contain transition-transform duration-500 ease-out hover:scale-110"
                alt={`project-${card.id}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShop;
