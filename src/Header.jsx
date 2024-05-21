import { useState } from "react";
import imagess from "./data.json";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const [ModalOpen1, setModalOpen1] = useState(false);
  const [ModalOpen2, setModalOpen2] = useState(false);

  const handleMouseEnter1 = () => {
    setModalOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setModalOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setModalOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setModalOpen2(false);
  };

  const selectedImage = imagess.images.find((image) => image.id === 1);

  return (
    <>
      <div className=" bg-[#ebebed] flex items-center justify-between border border-gray-500 w-[100%] h-[60px] fixed [z-index:10]">
        <div className="ml-[30px]">
          {selectedImage ? (
            <img src={selectedImage.url} alt={`Image ${selectedImage.id}`} />
          ) : (
            <p>Image not found</p>
          )}
        </div>
        <div className="flex  items-center justify-center gap-20 h-full relative ">
          <ul className="flex items-center rela gap-20">
            <div
              className="cursor-pointer flex items-center chevron-container border-black p-2 h-[60px]"
              onMouseOver={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div className="flex items-center justify-center border-[3px] hover:[border-bottom-color:brown] border-[#ebebed] mt-[10px] gap-2">
                <p>What we do!</p>
                <span className="chevron">
                  <IoChevronDown />
                </span>
              </div>
              <div
                className={`hello-modal w-[100px] ${
                  ModalOpen1 ? "open" : "closed"
                }`}
                onMouseOver={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <div className="w-full h-full  pt-[40px]    border-black">
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Services</p>
                    </div>
                    <div className=" w-[350px]">
                      <p className="text-[22px] mb-3 text-black underline">
                        Software development
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Web development
                      </p>
                    </div>
                    <div>
                      <p className="text-[25px] mb-3 text-black underline">
                        Mobile app development
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        It services for stratups
                      </p>
                    </div>
                  </div>
                  <hr className="h-[2px] f-full bg-gray  my-5" />
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Industries</p>
                    </div>
                    <div className=" w-[355px]">
                      <p className="text-[22px] mb-3 text-black underline">
                        Fintech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Healthtech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Edtech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Gamedev
                      </p>
                    </div>
                    <div>
                      <p className="text-[25px] mb-3 text-black underline">
                        Real estate
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Ecommerce
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Marketing/Adtech
                      </p>
                    </div>
                  </div>
                  <hr className="h-[2px] f-full bg-gray  my-5" />
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Expertise</p>
                    </div>
                    <div className="w-[355px]">
                      <p className="text-black underline text-[22px] mb-3 ">
                        Cloud
                      </p>
                      <p className="text-black underline text-[22px] mb-3 ">
                        AR/VR
                      </p>
                      <p className="text-black underline text-[22px] mb-3 ">
                        Blockchain
                      </p>
                      <p className="text-black underline text-[22px] mb-3">
                        Salesforce
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-[25px] text-black underline">
                        Internet of things
                      </p>
                      <p className="mb-3 text-[25px] text-black underline">
                        Ai
                      </p>
                      <p className="mb-3 text-[25px] text-black underline">
                        Big data
                      </p>
                      <p className="mb-3 text-[25px] text-black underline">
                        Cybersecurity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Insights</a>
            </li>
            <div
              className="relative hover:cursor-pointer"
              onMouseOver={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div className="flex items-center border-[3px] border-[#ebebed]  hover:[border-bottom-color:brown] gap-2 justify-center">
                <p>Abuot us</p>
                <span className="chevron">
                  <IoChevronDown />
                </span>
              </div>
              <div
                className={`hello-modal2  ${ModalOpen2 ? "open" : "closed"}`}
                onMouseOver={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div className="w-full h-full pt-[40px]">
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Services</p>
                    </div>
                    <div className=" w-[355px]">
                      <p className="text-[22px] mb-3 text-black underline">
                        Software development
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Web development
                      </p>
                    </div>
                    <div>
                      <p className="text-[25px] mb-3 text-black underline">
                        Mobile app development
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        It services for stratups
                      </p>
                    </div>
                  </div>
                  <hr className="h-[2px] f-full bg-gray  my-5" />
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Industries</p>
                    </div>
                    <div className=" w-[355px]">
                      <p className="text-[22px] mb-3 text-black underline">
                        Fintech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Healthtech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Edtech
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Gamedev
                      </p>
                    </div>
                    <div>
                      <p className="text-[25px] mb-3 text-black underline">
                        Real estate
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Ecommerce
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Marketing/Adtech
                      </p>
                    </div>
                  </div>
                  <hr className="h-[2px] f-full bg-gray  my-5" />
                  <div className="flex items-start ">
                    <div className=" w-[200px]">
                      <p className="text-[22px] text-purple-800">Expertise</p>
                    </div>
                    <div className=" w-[355px]">
                      <p className="text-[22px] mb-3 text-black underline">
                        Cloud
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        AR/VR
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Blockchain
                      </p>
                      <p className="text-[22px] mb-3 text-black underline">
                        Salesforce
                      </p>
                    </div>
                    <div>
                      <p className="text-[25px] mb-3 text-black underline">
                        Internet of things
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Ai
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Big data
                      </p>
                      <p className="text-[25px] mb-3 text-black underline">
                        Cybersecurity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <button className="text-black flex items-center justify-center font-medium hover:bg-gray-900 hover:[transition:0.3s] hover:text-white px-[40px] py-3 h-full bg-[#ff6947]">
            Contact Us
          </button>
          <AiOutlineGlobal className="text-[25px] mr-[30px]" />
        </div>
      </div>
    </>
  );
};

export default Header;
