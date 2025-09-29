import React from "react";
import man1 from "../assets/about/who_are_we.png";
import man2 from "../assets/about/who_are_we-2.png";
import man3 from "../assets/about/who_are_we-3.png"

const AboutUs = () => {
  return (
    <div className="container lg:px-12 px-6">
      {/* 1 */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-40 gap-10">
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold lg:leading-12">
              We Develop Sustainable
              <br className="hidden lg:block" />
              <span className="text-green-600">Software</span>
            </h2>

            <p className="lg:text-xl text-lg lg:mt-10 mt-8 opacity-60">
              We are a creative team of designers and programmers who are
              passionate about crafting web and mobile applications. With over
              10 years of experience, our focus has been on generating
              exceptional ideas and transforming them into reality in a
              practical and down-to-earth manner. Our goal is to develop
              websites and apps that not only look appealing and perform
              effortlessly but also help our clients attract new customers and
              foster the growth of their businesses.
            </p>
          </div>

          {/* Image */}
          <div className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man1} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
      {/* 2 */}
      <section>
        <div className="flex flex-col-reverse md:flex-row justify-between lg:gap-40 gap-10 lg:mt-26 mt-8">
          {/* Image */}
          <div className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man2} alt="" className="w-full h-auto" />
          </div>
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold leading-12">
              Making Your Work <br className="block lg:hidden" />
              <span className="text-green-600">
                Easier, <br className="hidden lg:block" /> Together!
              </span>
            </h2>

            <p className="lg:text-xl text-lg lg:mt-10 mt-8 opacity-60">
              We make software that helps businesses like yours work smarter,
              not harder! We believe in listening to our clients and
              understanding their needs. This helps us build solutions that make
              their business thrive. We're not just about selling software;
              we're about building partnerships that last.
            </p>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-40 gap-10 lg:mt-26 mt-8">
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold leading-12">
              Growing Together,
              <br className="hidden lg:block" />
              <span className="text-green-600"> Building the Future!</span>
            </h2>

            <p className="lg:text-xl text-lg lg:mt-10 mt-8 opacity-60">
              We see a future where businesses of all sizes can access powerful
              and affordable software tools. We want to be the go-to company for
              anyone looking to improve their operations and achieve their
              goals.
            </p>
          </div>

          {/* Image */}
          <div className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man3} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
