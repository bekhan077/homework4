import React from "react";
import Marquee from "react-fast-marquee";

const Vd = () => {
  return (
    <>
      <div className="w-[90%] border border-gray-300">
        <div className="flex items-start justify-between w-full ">
          <div className="w-[47%]"></div>
          <div className="w-[53%] border mt-[140px]">
            <p className="font-semibold text-[48px] mb-[30px] leading-[60px]">
              Discover Vention in action
            </p>
            <p className="font-normal mb-[50px] text-[19px]">
              See firsthand what sets us apart — and how our approach has
              translated into exponential growth for our clients worldwide. Hit
              play to begin your journey with us.
            </p>
          </div>
        </div>
        <div className="w-full h-[600px] mb-[40px]">
          <div className="w-[90%] h-full m-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/CpO-2w7KjpE?si=U4SASUU4QFkBvNr8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-full mt-[200px]  border border-gray-300">
          <h3 className="font-semibold  mb-[10px] text-[50px]">Partnerships</h3>
          <p className=" font-normal mb-[40px]  text-[19px]">
            Our network includes the world’s top tech leaders, ensuring that our
            developers always have access to cutting-edge technologies and
            products.
          </p>
          <Marquee className="h-[140px]  left-0 w-[100%] animate-marquee_1s_linear_infinite border">
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
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/salesforce_l0Nx3cG.svg"
            />
            <img
              className="mr-[130px]"
              src="https://ventionteams.com/media/documents/uipath-partner-authorized-lockup-digital-rgb-white_1.svg"
            />
          </Marquee>
        </div>
        <div className="w-full flex items-start justify-between mt-[200px] ">
          <div className="w-[48%]"></div>
          <div className="w-[54%] border ">
            <p className="font-semibold leading-[60px] text-[48px] mb-[30px] ">
              Our work
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vd;
