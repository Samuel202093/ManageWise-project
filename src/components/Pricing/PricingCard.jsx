import React from "react";
import PackageContentList from "./PackageContentList";

const PricingCard = ({ data, index }) => {
  return (
    <div
      class={`p-4  w-full ${
        index === 1
          ? "bg-bgSecondary md:h-[510px] lg:h-[490px]"
          : "bg-bgPurpleMedium md:h-[500px] lg:h-[470px]"
      } rounded-3xl`}
    >
      <div class="h-full p-6   flex flex-col relative overflow-hidden">
        <p className="mb-5 w-fit  text-textOrangeAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          {data.planType}
        </p>
        <h1
          class={`text-5xl ${
            index === 1 ? "text-white" : "text-bgSecondary"
          } leading-none flex items-end pb-4 mb-4  border-gray-200`}
        >
          <span>${data.amount}</span>
          <span class="text-sm ml-1 mb-1 font-normal ">/month</span>
        </h1>
        <PackageContentList data={data.planPackage} />
        <button
          class={`w-fit mt-auto  ${
            index === 1
              ? "text-white bg-PurpleAccent mt-5"
              : "text-bgSecondary bg-white"
          }   mt-auto font-semibold border border-transparent py-2 px-4 focus:outline-none hover:border-black rounded`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
