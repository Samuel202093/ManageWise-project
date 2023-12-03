import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { pricingData } from "./data";
import PricingCard from "./PricingCard";
import { v4 } from "uuid";

const Pricing = () => {
  return (
    <div className="h-fit lg:h-screen bg-white pt-[80px]">
      <div className="pricing flex items-center h-full justify-center flex-col w-[90%] md:w-[70%] mx-auto">
        <p className="mb-5 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          💲 pricing
        </p>
        <h2 className="mb-5 text-[33px] md:text-[56px] leading-[36px] md:leading-[56px] text-center font-medium text-black ">
          <span className="hidden md:inline">
            Select your ideal
            <span className="text-textOrangeAccent"> Pricing</span> plan
          </span>
          <span className="md:hidden inline">
            Select your ideal <br />
            <span className="text-textOrangeAccent"> Pricing</span> plan
          </span>
        </h2>
        <p className="text-center text-[#7F7E7D] leading-[30px] font-normal font-sans text-lg md:text-xl">
          <span className="hidden md:inline">
            At Manage Wise, we believe in providing you with
            <br />
            pricing plans that adapt to your unique needs.
          </span>
          <span className="md:hidden inline">
            At Manage Wise, we believe in providing you with pricing plans that
            adapt to your <br /> unique needs.
          </span>
        </p>
        {/*  */}

        <section class="text-gray-600 w-full overflow-hidden">
          <div class="py-24">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-end">
              {pricingData.map((datum, i) => (
                <PricingCard key={v4()} data={datum} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
