import React from "react";
import CardContainer from "./CardContainer";

const Testimonials = () => {
  return (
    <div className="min-h-[100vh] bg-white mt-10 md:mt-20 md:pt-[100px] ">
      <div className="and-more-features flex flex-col  w-[90%] md:w-[70%]  mx-auto">
        <p className="mb-5 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          🧡 testimonials
        </p>
        <h2 className="mb-5 text-[33px] md:text-[56px] leading-[36px] md:leading-[56px] font-medium text-bgSecondary ">
          <span className="hidden md:inline">
            Hear from our{" "}
            <span className="text-textOrangeAccent">Satisfied</span> clients
          </span>
          <span className="md:hidden inline">
            Hear from our <br />
            <span className="text-textOrangeAccent">Satisfied</span> clients
          </span>
        </h2>
        <p className="mission-statement  text-[#7F7E7D] font-normal font-sans text-lg md:text-xl">
          <span className="hidden md:inline">
            Discover why our clients love working with us. Read their
            <br />
            testimonials and learn how we has helped businesses.
          </span>
          <span className="md:hidden inline">
            Discover why our clients love working with <br /> us. Read their
            testimonials and learn how <br /> we has helped businesses.
          </span>
        </p>
        {/*  */}
        <div className="mt-20 main-macquee">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
