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
// introducing team members
import man10 from "../assets/about/Sohag Hasan.jpg";
import man11 from "../assets/about/akib_hossain.jpeg";
import man12 from "../assets/about/masnunsiamnew.jpg";
import man13 from "../assets/about/anik-kumar-nandi.jpg";
import man14 from "../assets/about/sohel-rana.jpg";
import man15 from "../assets/about/sobujnew.jpg";
import man16 from "../assets/about/muhsin-azmal.jpg";
import man17 from "../assets/about/masud-rana.jpg";
import CountUp from "react-countup";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
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
      {/* 5 */}
      <section className="lg:mt-26 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-4xl text-3xl font-bold text-center mb-10">
            We <span className="text-green-600">Dream Big</span> But Act with{" "}
            <span className="text-green-600">Honesty</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-cente mt-20 lg:space-y-17 space-y-12">
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
      {/* 6 */}
      <section className="lg:mt-26 mt-16">
        <div className="text-center">
          <h2 className="lg:text-4xl text-3xl font-bold text-center lg:mb-12 mb-6">
            Our<span className="text-green-600">Achievements</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:mt-6">
          {/* 1 */}
          <div className="lg:p-6 p-3">
            <h2 className="text-5xl text-blue-600 mt-2">
              <CountUp end={100} enableScrollSpy scrollSpyDelay={1} />+
            </h2>
            <p className="text-lg ml-2 mt-1 text-[#0F0F0F99]">Total Projects</p>
          </div>
          {/* 2 */}
          <div className="lg:p-6 p-3">
            <h2 className="text-5xl mt-2 text-green-600">
              <CountUp end={17} enableScrollSpy scrollSpyDelay={1} />+
            </h2>
            <p className="text-lg mt-1 text-[#0F0F0F99]">Total Clients</p>
          </div>
          {/* 3 */}
          <div className="lg:p-6 p-3">
            <h2 className="text-5xl mt-2 text-green-600">
              <CountUp end={50} enableScrollSpy scrollSpyDelay={1} />
              K+
            </h2>
            <p className="text-lg ml-2 mt-1 text-[#0F0F0F99]">Total Hours</p>
          </div>
          {/* 4 */}
          <div className="lg:p-6 p-3">
            <h2 className="text-5xl mt-2 text-pink-400">
              <CountUp end={90} enableScrollSpy scrollSpyDelay={1} />
              K+
            </h2>
            <p className="text-lg mt-1 text-[#0F0F0F99]">Total Coffee</p>
          </div>
        </div>
      </section>
      {/* 7 */}
      <section className="lg:mt-26 mt-16 mb-20 m-0">
        <div>
          <h2 className="lg:text-4xl text-3xl font-bold text-center mb-4">
            Introducing the People
            <span className="text-green-600">Behind the Magic</span>
          </h2>
          <p className="text-center text-lg opacity-65">
            Ever wonder who's behind all this cool stuff? Check out our awesome
            team! They're the secret sauce to our success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-16 mt-6 mb-14 gap-8 lg:gap-1 lg:space-y-16">
            {/* card 1 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man10} alt="Sohag" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Sohag is a crazy talented person. He completed his diploma
                      in Electrical Engineering, but his passion for coding
                      brought him to the development world. With his Full-stack
                      expertise, Sohag is now leading the web development team.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Sohag Hasan
              </h4>
              <p className="text-center opacity-70">Lead Software Engineer</p>
            </div>

            {/* card 2 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man11} alt="Akib" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Akib Hosain is the senior software engineer at Binary
                      Fusion. His expertise in different fields earned him this
                      position. Moreover, he is an excellent business analyst of
                      Complex Enterprise Solutions.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Akib Hosain
              </h4>
              <p className="text-center opacity-70">Sr. Software Developer</p>
            </div>

            {/* card 3 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man12} alt="Masnun" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Masnun is a Flutter developer at Binary Fusion. Everyone
                      calls him the Flutter King! He considers himself a
                      hardcore Vim user and prefers Tabs over Spaces.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Masnun Siam
              </h4>
              <p className="text-center opacity-70">
                Software Engineer (Mobile)
              </p>
            </div>

            {/* card 4 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner flip-img">
                  <div className="flip-card-front">
                    <img src={man13} alt="Dev 4" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Flutter developer at Binary Fusion. Loves Anime, Netflix
                      and is passionate about clean code.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Developer Four
              </h4>
              <p className="text-center opacity-70">Software Engineer</p>
            </div>

            {/* card 5 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man14} alt="Dev 5" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Enthusiastic about new technologies, problem-solving and
                      passionate about mobile applications.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Developer Five
              </h4>
              <p className="text-center opacity-70">Frontend Developer</p>
            </div>

            {/* card 6 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man15} alt="Dev 6" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Hardcore coder who prefers Vim over IDEs. Loves watching
                      anime and enjoys debugging challenges.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Developer Six
              </h4>
              <p className="text-center opacity-70">Backend Engineer</p>
            </div>

            {/* card 7 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man16} alt="Dev 7" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Specialist in scalable systems, loves working on
                      performance optimization and cloud solutions.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Developer Seven
              </h4>
              <p className="text-center opacity-70">Cloud Engineer</p>
            </div>

            {/* card 8 */}
            <div className="flex flex-col items-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={man17} alt="Dev 8" />
                  </div>
                  <div className="flip-card-back">
                    <p>
                      Loves design systems, animations and smooth UI
                      experiences. Strong advocate for clean UX.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl text-center font-semibold mt-4">
                Developer Eight
              </h4>
              <p className="text-center opacity-70">UI/UX Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
