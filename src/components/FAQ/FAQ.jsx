import React, { useState } from "react";
import Accordian from "./Accordian";
import { v4 } from "uuid";
import { accordianData } from "./data";

const FAQ = () => {
  return (
    <div className="bg-textPrimary min-h-[100vh] w-[90%] lg:w-[70%]  mx-auto flex flex-col lg:flex-row pt-[80px] md:pt-[150px] justify-center md:items-start  gap-10 lg:gap-[150px]">
      <div className="section-text flex flex-col justify-center items-center md:items-start w-full   md:gap-5">
        <p className="mb-5 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          🙋‍♀️ FAQ
        </p>
        <h2 className="mb-5 text-center md:text-left text-[33px] md:text-[56px]  font-medium leading-[36px] md:leading-[56px] text-black ">
          Need <br /> <span className="text-textOrangeAccent">Answers?</span>
        </h2>
        <p className=" text-[#7F7E7D] text-center md:text-left leading-[30px] font-normal font-sans text-lg md:text-xl">
          <span className="hidden md:inline">
            Check out our most commonly
            <br />
            asked questions below to find the
            <br />
            information you need.
          </span>
          <span className="md:hidden inline">
            Check out our most commonly
            
            asked <br /> questions below to find the information
            <br />
             you need.
          </span>
        </p>
      </div>
      <div className="accordian-container">
        {accordianData.map((datum) => (
          <Accordian key={v4()} data={datum} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
