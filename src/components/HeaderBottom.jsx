import React, { useState, useEffect } from "react";
import image1 from "../../public/assets/aaaaaa.jpg";
import image2 from "../../public/assets/bbbb.jpg";
import image3 from "../../public/assets/cccc.jpg";
import image4 from "../../public/assets/eeee.jpg";

const numbers = ["01", "02", "03", "04"];
const colors = ["bg-orange-500", "bg-pink-500", "bg-red-500", "bg-blue-600"];
const texts = [
  "Engineering peace of mind",
  "International Invention Day",
  "AI innovation",
  "Expert software development",
];
const images = [image1, image2, image3, image4];

function HeaderBottom() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="flex items-center justify-center flex-col w-full mt-[60px] h-screen bg-white relative border-b-[1px]">
      <div className=" items-start">
        <div
          className={`flex items-center absolute w-[50%] top-0 left-0 m-4 px-4 h-[40%] ${colors[index]}`}
        >
          <h1 className="text-[60px] font-semibold text-black  h-[50%]">
            {texts[index]}
          </h1>
        </div>
        <div className="absolute  right-10 flex items-end top-[250px]">
          {numbers.map((number, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`transition-transform cursor-pointer duration-7000 ${
                i === index
                  ? "text-2xl text-black border-t-2 px-8 [transition:0.4s] border-black"
                  : "text-2xl  border-t-2 px-4 text-gray-400"
              } mx-2 `}
              style={{ transform: `translateY(${i === index ? "0" : "10px"})` }}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div className="relative left-[10px]">
        <p className="text-black border  absolute mt-40 left-[-0px] top-[-70px]">
          Vention developers partner with innovative <br /> companies from
          startups to Fortune 500s,
          <br /> lending the AI engineering expertise to <br /> propel them to
          new heights and the edge <br /> to outpace the competition.
        </p>
        <button
          className={`mt-24 px-4 py-2 pb-3 ${colors[index]} mr-[350px] w-[340px] h-[70px] mt-4 text-white`}
          onClick={() => handleClick(index)}
        >
          {texts[index]} Button
        </button>
      </div>

      <div className="absolute bottom-4 border right-5 w-[710px] h-[400px] ">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full shadow-lg rounded-lg "
        />
      </div>
    </div>
  );
}

export default HeaderBottom;
