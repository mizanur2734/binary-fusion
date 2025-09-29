import React from "react";
import man1 from "../assets/about/who_are_we.png";
import man2 from "../assets/about/who_are_we-2.png";
import man3 from "../assets/about/who_are_we-3.png";
import man4 from "../assets/about/bulbul-ahmed.jpg";
import man5 from "../assets/about/bulbul-ahmed.png";
import man6 from "../assets/about/youth.png";
import man7 from "../assets/about/adaptation.png";
import man8 from "../assets/about/help.png";
import man9 from "../assets/about/chatting.png";

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
        <div className="flex flex-col-reverse md:flex-row justify-between lg:gap-40 gap-10 lg:mt-24 mt-8">
          {/* Image */}
          <div className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man2} alt="" className="w-full h-auto" />
          </div>
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold lg:leading-12">
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
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-40 gap-10 lg:mt-20 mt-8">
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold lg:leading-12">
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
      {/* 4 */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-40 gap-10 lg:mt-30 mt-8">
          {/* Image */}
          <div className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man4} alt="" className="w-full h-auto" />
          </div>
          {/* Text */}
          <div className="lg:max-w-[600px]">
            <h2 className="lg:text-4xl text-3xl font-bold lg:leading-12">
              The <span className="text-green-600">Leadershipe!</span> We Follow
              <br className="hidden lg:block" />
            </h2>

            <p className="lg:text-xl text-lg lg:mt-10 mt-8 opacity-60">
              At Binary Fusion, we're obsessed with making awesome software!
              That's because I'm a design perfectionist and want my clients to
              have the best. But don't worry; I have a fantastic team that can
              handle anything. We build websites, apps and even design the way
              they look and feel, all customized just for you. My only goal is
              to make you happy and that's something we'll never compromise on.
              So ditch the compromises and join us! Let's build something truly
              amazing together!
            </p>
            <img className="mt-6" src={man5} alt="" />
            <h4 className="mt-4 text-xl font-bold">Bulbul Ahmed</h4>
            <h5 className="text-lg font-bold opacity-70">
              Founder & CEO, Binary Fusion
            </h5>
          </div>
        </div>
      </section>
      {/* dream big */}
      <section className="lg:mt-26 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="lg:text-4xl text-3xl font-bold text-center mb-10">
            We <span className="text-green-600">Dream Big</span> But Act with{" "}
            <span className="text-green-600">Honesty</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-20 lg:space-y-17 space-y-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center max-w-lg">
              <img src={man6} className="h-20 mb-4" alt="man1" />
              <h4 className="text-[22px] font-semibold mb-2 opacity-80">
                Seeing the Human Side of Business
              </h4>
              <p className="text-lg opacity-70">
                Teamwork makes the dream work! We're all different, but that's
                what makes us strong. We use our unique skills to help each
                other out and reach our goals. That’s our biggest strength!
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center max-w-lg">
              <img src={man7} className="h-20 mb-4" alt="man2" />
              <h4 className="text-[22px] font-semibold mb-2 opacity-80">
                Seeing the Human Side of Business
              </h4>
              <p className="text-lg opacity-70">
                Teamwork makes the dream work! We're all different, but that's
                what makes us strong. We use our unique skills to help each
                other out and reach our goals. That’s our biggest strength!
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center max-w-lg">
              <img src={man8} className="h-20 mb-4" alt="man3" />
              <h4 className="text-[22px] font-semibold mb-2 opacity-80">
                Seeing the Human Side of Business
              </h4>
              <p className="text-lg opacity-70">
                Teamwork makes the dream work! We're all different, but that's
                what makes us strong. We use our unique skills to help each
                other out and reach our goals. That’s our biggest strength!
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center max-w-lg">
              <img src={man9} className="h-20 mb-4" alt="man4" />
              <h4 className="text-[22px] font-semibold mb-2 opacity-80">
                Seeing the Human Side of Business
              </h4>
              <p className="text-lg opacity-70">
                Teamwork makes the dream work! We're all different, but that's
                what makes us strong. We use our unique skills to help each
                other out and reach our goals. That’s our biggest strength!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
