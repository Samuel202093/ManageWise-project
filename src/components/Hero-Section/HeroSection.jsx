import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-20 flex-nowrap h-fit justify-center overflow-hidden pt-20 md:pt-[100px] items-center hero-section-bg-color">
      <div className="description-text container px-4">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="mb-2 welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
            👋 Welcome to manage wise
          </p>
          <h1 className="mb-10 text-[50px] lg:text-[85px] font-medium leading-[55px] lg:leading-[85px] text-black text-center">
            Empower your business with <br />
            <span className="text-textOrangeAccent">Strategic</span>{" "}
            <span className="block md:inline">insights</span>
          </h1>
          <p className="mission-statement text-center text-[#7F7E7D] font-normal font-sans text-lg md:text-xl">
            <span className="hidden md:inline">
              Powerful management platform designed to streamline your business{" "}
              <br /> operations, boost productivity, and drive success.
            </span>
            <span className="md:hidden ">
              Powerful management platform <br /> designed to streamline your
              business <br /> operations, boost productivity, and <br /> drive
              success.
            </span>
          </p>
          <div className="mt-7 call-to-action-btns w-full flex flex-col lg:flex-row  items-center justify-center gap-5 md:gap-7">
            <button className="btn-get-started px-7 w-full lg:w-fit py-3 text-xl md:text-[18px]  rounded-2xl text-white">
              <span className="text">Get Started</span>
              <span className="icon text-xl">
                <FaCircleArrowRight />
              </span>
            </button>
            <div className="bg-white rounded-2xl w-full lg:w-fit">
              <button className="px-7 flex w-full lg:w-fit justify-center items-center gap-2 py-3 bg-transparent text-black border font-semibold rounded-2xl text-xl md:text-lg">
                Watch Demo{" "}
                <span className="text-black text-xl">
                  <IoPlayCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="heroImg-container mb-5">
        <img
          src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg"
          alt="Graph"
          srcset="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=512 512w, 
          https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024 1024w, 
          https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048 2048w, 
          https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=4096 4096w, 
          https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg 5768w"
          sizes="min(90vw, 1200px)"
          className="block w-full h-full rounded  heroImg object-center object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
