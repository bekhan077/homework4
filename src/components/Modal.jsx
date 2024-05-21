import React, { useState, useEffect } from "react";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { RiPaypalLine } from "react-icons/ri";

const Modal = ({ closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex justify-end fixed bg-[#000000B2] w-full h-full top-0 left-0">
        <div
          className={`w-[1075px] h-[728px]  rounded-tr-[16px] relative bg-[#1F1D2B]  pl-[24px] py-[10px] pr-[24px] rounded-br-[16px]  payment-container transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
