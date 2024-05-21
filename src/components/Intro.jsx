import React from "react";
import Marquee from "react-fast-marquee";

const Intro = () => {
  return (
    <>
      <div className="w-[90%]  right-0 mb-[100px]  border border-gray-300 mt-[250px]">
        <h2 className="text-[37px] mb-[30px] font-semibold">
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h2>
        <p className="w-[50%]  text-[18px] text-gray-900 absolute right-[60px] ">
          On average, Vention clients benefit $600,000+ from annual savings as a
          result of our collaboration.
        </p>
        <div className="w-full  mt-[150px] pl-[30px] pr-[50px]">
          <ul className=" flex flex-wrap items-start justify-between">
            <li className="w-[300px] h-[230px] ">
              <p className="text-[#52002d] mt-[30px] font-semibold   text-[25px]">
                Key stats
              </p>
            </li>
            <li className="w-[300px] h-[230px]"></li>
            <li className="w-[300px] h-[230px] flex flex-col  ">
              <p className="text-[#52002d] font-light  text-[95px]">500+</p>
              <p className=" font-light   text-[20px]">award-winning clients</p>
            </li>
            <li className="w-[300px] h-[230px] flex flex-col  ">
              <p className="text-[#52002d] font-light  text-[95px]">$15B+</p>
              <p className=" font-light   text-[20px]">
                in client acquisitions
              </p>
            </li>
            <li className="w-[300px] h-[300px] flex flex-col ">
              <p className="text-[#52002d] font-light  text-[95px]">36</p>
              <p className=" font-light   text-[20px]">
                month average engagement
              </p>
            </li>
            <li className="w-[300px] h-[300px] flex flex-col  ">
              <p className="text-[#52002d] font-light  text-[95px]">20+</p>
              <p className=" font-light   text-[20px]">client IPOs supported</p>
            </li>
            <li className="w-[300px] h-[300px] flex flex-col ">
              <p className="text-[#52002d] font-light  text-[95px]">20+</p>
              <p className=" font-light   text-[20px]">years of experience</p>
            </li>
            <li className="w-[300px] h-[300px] flex flex-col ">
              <p className="text-[#52002d] font-light  text-[95px]">3K+</p>
              <p className=" font-light   text-[20px]">world-class engineers</p>
            </li>
          </ul>
          {/* -------------------- */}
          <h3 className="font-semibold mt-[30px] mb-[10px] text-[50px]">
            Trusted by the best
          </h3>
          <p className=" font-normal mb-[40px]  text-[20px]">
            Companies ranging from early-stage startups to Fortune 500
            enterprises partner with us to develop game-changing growth
            solutions.
          </p>
          {/* -------marquee------ */}
          <Marquee className="h-[140px]  left-0 w-[103%] animate-marquee_1s_linear_infinite border">
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/ey_eVyZsxY.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/dealcloud-2.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/paypal_RVc4KIP.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/grubhub_cPYd20X.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/Slice_black.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/coca_cola-2.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/Merkle_black.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/Slice_black.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/pwc_2uTD1Rv.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/ibm-2.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/Merkle_black.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/postman_new.svg"
            />
          </Marquee>
          {/* ---------------------- */}
          <div className="w-full flex items-start justify-between">
            <div className="w-[47%]"></div>
            <div className="w-[53%] border mt-[140px]">
              <p className="text-[24px] font-semibold mb-[30px] text-[#52002d]">
                We speak your language
              </p>
              <p className="font-semibold text-[48px] mb-[30px] leading-[60px]">
                Wondering how well we know your industry? Curious which tech
                stacks we support?
              </p>
              <p className="font-normal mb-[40px]  text-[20px]">
                Spanning 30+ verticals and 25+ technologies, our team has
                designed and implemented innovative solutions to suit even the
                most unique needs.
              </p>
            </div>
          </div>
          {/* ---------------------- */}
          <div className="w-full   pt-[40px] mt-[20px]    border-black">
            <div className="flex items-start ">
              <div className=" w-[600px]">
                <p className="text-[22px] font-semibold text-[#52002d]">
                  Expertise
                </p>
              </div>
              <div className=" w-[350px] cursor-pointer">
                <p className="text-[25px] mb-3 text-black underline">
                  Software development
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Web development
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Mobile development
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Startup services
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Cloud services
                </p>
              </div>
              <div className="cursor-pointer">
                <p className="text-[25px] mb-3 text-black underline">
                  Blockchain
                </p>
                <p className="text-[25px] mb-3 text-black underline">AR/VR</p>
                <p className="text-[25px] mb-3 text-black underline">
                  Salesforce
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Artificial intelligence
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Internet of things
                </p>
              </div>
            </div>
            <hr className="h-[2px] f-full bg-gray  my-5" />
            <div className="flex items-start">
              <div className=" w-[600px]">
                <p className="text-[22px] text-[#52002d]">Industries</p>
              </div>
              <div className=" w-[350px] cursor-pointer">
                <p className="text-[22px] mb-3 text-black underline">Fintech</p>
                <p className="text-[22px] mb-3 text-black underline">
                  Healthtech
                </p>
                <p className="text-[22px] mb-3 text-black underline">Edtech</p>
              </div>
              <div>
                <p className="text-[25px] mb-3 text-black underline">
                  Ecommerce
                </p>
                <p className="text-[25px] mb-3 text-black underline">
                  Real estate
                </p>

                <p className="text-[25px] mb-3 text-black underline">
                  Marketing/Adtech
                </p>
              </div>
            </div>
            <hr className="h-[2px] f-full bg-gray  my-5" />
          </div>
          {/* --------------------- */}
        </div>
      </div>
    </>
  );
};

export default Intro;
