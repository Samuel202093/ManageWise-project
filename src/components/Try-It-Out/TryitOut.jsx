import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const TryitOut = () => {
  return (
    <div className="try-it-out min-h-[80vh] flex justify-center items-center">
      <div className=" py-20 md:p-20 rounded-3xl bg-white border w-[90%] lg:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[180px] lg:gap-20">
        <div className="section-text flex-col w-full justify-center items-center gap-5">
          <p className="mb-5 mx-auto md:mx-0 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
            👋 DON'T MISS OUT
          </p>
          <h2 className="mb-5 text-center md:text-left text-[33px] md:text-[56px] leading-[36px] md:leading-[56px]  font-medium text-black ">
            Unleash your <br />{" "}
            <span className="text-textOrangeAccent">Potential</span> with us
          </h2>
          <p className=" text-[#7F7E7D] text-center md:text-left leading-[30px] font-normal font-sans text-xl">
            <span className="hidden md:inline">
              Join our community of ambitious
              <br />
              individuals and organizations eager to
              <br />
              make a difference.
            </span>
            <span className="md:hidden inline">
              Join our community of <br /> ambitious individuals
              <br />
              and organizations eager
              <br />
              to make a difference.
            </span>
          </p>
          <button className="btn-get-started mx-auto md:mx-0 mt-5 px-7 py-3 rounded-2xl text-white">
            <span className="text">Try out now</span>
            <span className="icon text-xl">
              <FaCircleArrowRight />
            </span>
          </button>
        </div>
        <div className="tooltip-image-container relative bg-white">
          <p className="tool-tip w-fit after:border after:border-t-0 after:border-l-0 p-3 rounded-xl bg-white border text-xl font-semibold text-black">
            <span className="text-PurpleAccent">200+</span> Happy users
          </p>
          <div className="img-div lg:w-[400px]">
            <img
              src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024"
              alt="Memoji"
              srcset="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512 512w, https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png 1760w"
              sizes="440px"
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryitOut;
