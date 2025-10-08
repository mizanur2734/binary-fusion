import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import man1 from "../assets/contact/contact2.png";
import man2 from "../assets/contact/contact-1.png";
import { MdCall } from "react-icons/md";
const ContactUs = () => {
     const [loading, setLoading] = useState(true);
        useEffect(() => {
        setTimeout(() => {
          setLoading(false); 
        }, 1000); 
      }, []);
        if(loading){
            return <Loading  />
        }
  return (
    <div className="container mx-auto px-4 lg:px-12">
      {/* 1 */}
      <section className="lg:py-16 py-8 lg:mt-20 mt-14">
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-40 gap-10 mt-6">
          {/* Text */}
          <div data-aos="fade-up" data-aos-duration="2000" className="lg:max-w-[700px]">
            <h1 className="lg:text-5xl text-3xl font-bold lg:leading-12">
              We're Here to Help
            </h1>

            <p className="lg:text-lg text-lg lg:mt-5 mt-8 opacity-60 whitespace-normal lg:whitespace-nowrap">
              We understand challenges can arise. Let's talk to find the right
              answer for you.
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left" data-aos-duration="2000" className="lg:max-w-[500px] mt-6 md:mt-0">
            <img src={man1} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
      {/* office-card */}
      <section className="lg:py-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-2">
          {/* card 1 */}
          <div data-aos="fade-up" data-aos-duration="2000" className="bg-[#28a745] p-10 rounded-md">
            <h3 className="text-3xl font-semibold text-white">Main Office</h3>
            <p className="text-white leading-7 mt-3 text-lg">
              House#31, Road#1, Block#B, <br className="block lg:hidden" />{" "}
              Aftab <br className="lg:block hidden" /> Nagar, Dhaka -1212,
              Bangladesh
            </p>
            <div className="flex items-center mt-[10px] gap-2">
              <p className="text-white text-[24px] mt-4">
                <MdCall />
              </p>
              <p className="text-white pt-4">+880 1716 887449</p>
            </div>
          </div>
          {/* card 2 */}
          <div data-aos="fade-up" data-aos-duration="2000"  className="bg-[#6c757d] p-10 rounded-md">
            <h3 className="text-3xl font-semibold text-white">
              Australia Office
            </h3>
            <p className="text-white leading-7 mt-3 text-lg">
              7A Narooma Street, Gregory
              <br className="lg:hidden block" />
              Hills,
              <br />
              NSW, Post Code: 2557, Australia
            </p>
            <div className="flex items-center mt-[10px] gap-2">
              <p className="text-white text-[24px] mt-4">
                <MdCall />
              </p>
              <p className="text-white pt-4">+61 (04) 5108 3400</p>
            </div>
          </div>
          {/* card 3 */}
          <div data-aos="fade-up" data-aos-duration="2000"  className="bg-[#17a2b8] p-10 rounded-md">
            <h3 className="text-3xl font-semibold text-white">USA Office</h3>
            <p className="text-white leading-7 mt-3 text-lg">
              695 Mansell Rd, Ste. 230, <br /> Roswell, GA 30076, <br /> U.S.A.
            </p>
          </div>
        </div>
      </section>
      {/* contact form */}
        <section class="lg:py-16 py-8">
          <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-10 bg-white lg:mt-12">
            <div class="md:w-1/2 ">
              <h3 data-aos="fade-up" data-aos-duration="2000" className="lg:text-4xl text-3xl font-semibold text-center mb-2">
               Start a Conversation
              </h3>
              <img data-aos="fade-left" data-aos-duration="2000"
                src={man2}
                alt="Contact Illustration"
                class="w-[400px] md:w-[500px] h-auto"
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" class="md:w-2/3">
              <form class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    class="w-full bg-[#fffafa] border border-gray-200 rounded-full px-6 py-5 focus:outline-none hover:bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-[#fffafa] border border-gray-200 rounded-full px-6 py-5 focus:outline-none hover:bg-white"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  class="w-full bg-[#fffafa] border border-gray-200 rounded-full px-6 py-5 focus:outline-none hover:bg-white"
                />

                <textarea
                  rows="7"
                  placeholder="Your Comment"
                  class="w-full border bg-[#fffafa] border-gray-200 rounded-3xl px-6 py-5 focus:outline-none hover:bg-white"
                ></textarea>

                <button
                  type="submit"
                  class="bg-green-600 hover:bg-green-700 shadow-[0px_20px_30px_rgba(18,191,124,0.3)] hover:shadow-none text-white font-semibold py-4 px-9 rounded-full transition duration-200"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </section>
    </div>
  );
};

export default ContactUs;
