import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import softwareDev from "../assets/services/software-development.png";
import webDesign from "../assets/services/web-development.png";
import mobileApp from "../assets/services/mobile-app-development.png";
import uxDesign from "../assets/services/ui-ux-design.png";
import technical from "../assets/services/technical-support.png";
import installation from "../assets/services/installation.svg";
import consultants from "../assets/services/consultation.png";
// our areas
import healthCare from "../assets/services/areas-img/healthcare.png";
import eCommerce from "../assets/services/areas-img/ecommerce.png";
import CarRental from "../assets/services/areas-img/car-rental.png";
import OnDemand from "../assets/services/areas-img/on-demand.png";
import Education from "../assets/services/areas-img/education.png";
import RealEstate from "../assets/services/areas-img/real-stats.png";
import UiUx from "../assets/services/areas-img/ui-ux.png";
import FoodOrdering from "../assets/services/areas-img/food-order.png";
import Consultation from "../assets/services/areas-img/consultation.png";
import ManyMore from "../assets/services/areas-img/many-more.png";
// project journey image
import projectJourney from "../assets/services/contact-img/cta-bg.jpg";
// bg image
import bgImage1 from "../assets/services/contact-img/project-management-steps-mobile.png";
import bgImage2 from "../assets/services/contact-img/project-management-steps.png";
import { Link } from "react-router";
const Services = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  const cardsData = [
    {
      id: 1,
      title: "Software Development",
      description:
        "No No matter your business needs, we can design custom software & websites that fit. We specialize in developing unique solutions just for you. Whether it is CMS or a custom system, we can deliver exactly you want!",
      backText:
        "No matter your business needs, we can design custom software & websites that fit. We specialize in developing unique solutions just for you. Whether it is CMS or a custom system, we can deliver exactly what you want!",
      image: softwareDev,
    },
    {
      id: 2,
      title: "Web Design & Development",
      description:
        "Show the world what your business is all about with a website that wows! No matter what technology your business requires, we'll build one that captures your unique spirit, attracts customers and drives results.",
      backText:
        "Show the world what your business is all about with a website that wows! No matter what technology your business requires, we'll build one that captures your unique spirit, attracts customers and drives results.",
      image: webDesign,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Elevate your brand experience with a sophisticated mobile app. We develop business-centric premium apps for Android and iPhone. We use Flutter, an open-source framework for developing these cross-platform applications.",
      backText:
        "Elevate your brand experience with a sophisticated mobile app. We develop business-centric premium apps for Android and iPhone. We use Flutter, an open-source framework for developing these cross-platform applications.",
      image: mobileApp,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "We help design user-friendly interfaces for your software. We focus on making things clear, easy to use, and visually appealing. This means thinking about how users will navigate and interact with your software.",
      backText:
        "We help design user-friendly interfaces for your software. We focus on making things clear, easy to use, and visually appealing. This means thinking about how users will navigate and interact with your software.",
      image: uxDesign,
    },
    {
      id: 5,
      title: "Technical Support",
      description:
        "All kinds of technical support, such as performance optimization, project management, hosting infrastructure optimization, hosting guidance, backup & disaster recovery, server monitoring, migration services and many more.",
      backText:
        "All kinds of technical support, such as performance optimization, project management, hosting infrastructure optimization, hosting guidance, backup & disaster recovery, server monitoring, migration services and many more.",
      image: technical,
    },
    {
      id: 6,
      title: "Installation Services",
      description:
        "Our team possesses extensive experience in software installation. We can help you simplify your business operations and improve efficiency by integrating payment gateways, APIs, Webhooks, and iPaaS solutions",
      backText:
        "Our team possesses extensive experience in software installation. We can help you simplify your business operations and improve efficiency by integrating payment gateways, APIs, Webhooks, and iPaaS solutions.",
      image: installation,
    },
    {
      id: 7,
      title: "Consultation Service",
      description:
        "Our team offers comprehensive technical and security consulting services to optimize your eCommerce website and app. Additionally, we utilize the expertise of our consultants to develop a scalable growth plan tailored to your specific business needs",
      backText:
        "Our team offers comprehensive technical and security consulting services to optimize your eCommerce website and app. Additionally, we utilize the expertise of our consultants to develop a scalable growth plan tailored to your specific business needs.",
      image: consultants,
    },
  ];

  // our areas data
  const cards = [
    { id: 1, title: "Healthcare", img: healthCare },
    { id: 2, title: "eCommerce", img: eCommerce },
    { id: 3, title: "Car Rental", img: CarRental },
    { id: 4, title: "On Demand", img: OnDemand },
    { id: 5, title: "Education", img: Education },
    { id: 6, title: "Real-Estate", img: RealEstate },
    { id: 7, title: "UI/UX", img: UiUx },
    { id: 8, title: "Food Ordering", img: FoodOrdering },
    { id: 9, title: "Consultation", img: Consultation },
    { id: 10, title: "Many More", img: ManyMore },
  ];

  return (
    <div className="container mx-auto">
      <section className="lg:mt-36 mt-28 px-4 lg:px-12">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center"
        >
          <h2 className="lg:text-4xl text-3xl font-bold">
            <span className="text-green-600">Services </span>
            {/* <br className="hidden" /> */}
            We Provide
          </h2>

          <p className="lg:text-xl text-lg mt-4 opacity-60">
            We listen closely to what our clients{" "}
            <br className="lg:hidden block" /> need and use that knowledge to
            <br />
            develop powerful & top-notch software solutions.
          </p>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-14 py-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <div className="group perspective w-full max-w-[400px] sm:max-w-[420px] h-[410px] sm:h-[400px]">
                <div
                  className="relative w-full h-full transition-transform duration-700 rounded-3xl shadow-md"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-white flex flex-col items-center p-6 rounded-3xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-[25%] h-[25%]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-center mt-6 text-center">
                      <h3 className="text-2xl lg:text-[26px] font-semibold text-[#1a1a1a]">
                        {card.title}
                      </h3>
                      <p className="text-lg text-[#555] mt-4 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-gray-700 flex flex-col justify-center items-center rounded-3xl p-6"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <p className="text-lg first-letter:text-2xl first-letter:text-bold text-white leading-relaxed text-center mb-4">
                      {card.backText}
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Hover effect */}
                <style>
                  {`
                .group:hover > div {
                  transform: rotateY(180deg);
                }
              `}
                </style>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Areas of Expertise */}
      <section className="bg-[#F0F7EF] py-8 lg:py-16 px-4 lg:px-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className="lg:text-4xl text-3xl font-bold text-center"
        >
          <span className="text-green-600">Our Areas </span>
          {/* <br className="hidden" /> */}
          of Expertise
        </h2>
        {/*  */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 lg:p-4 mt-8">
          {cards.map((card) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={card.id}
              className="flex flex-col items-center justify-center p-8  bg-white rounded-2xl hover:bg-green-500 overflow-hidden transition-colors duration-700 ease-in-out"
            >
              <img src={card.img} className="w-12 mb-3" alt={card.title} />
              <h4 className="lg:text-xl opacity-75 text-center group-hover:text-white">
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
      {/* project  */}
      <section className=" mt-10 lg:py-16 lg:mt-6 lg:px-12">
        {/* mobile device */}
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className="lg:text-4xl text-3xl font-bold text-center lg:mb-16"
        >
          <span className="text-green-600">The Journey of </span>
          {/* <br className="hidden" /> */}
          Your Project
        </h2>
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          className="hidden lg:block"
          src={bgImage2}
          alt=""
        />
        {/* desktop device */}
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          className="block lg:hidden"
          src={bgImage1}
          alt=""
        />
      </section>
      {/* card */}
      <section className="mt-6 lg:px-12 lg:mb-20">
        <div
          className="w-full h-[350px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${projectJourney})` }}
        >
          {/* Overlay */}
          <div className="absolute"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-20">
              Tell Us Yours Needs.{" "}
              <span className="text-green-500">We're Ready!</span>
            </h1>
            <Link
              to={"/contactUs"}
              className="bg-green-600 hover:bg-green-700 shadow-[0px_20px_30px_rgba(18,191,124,0.3)] hover:shadow-none text-white font-semibold py-4 px-12 rounded-full transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
