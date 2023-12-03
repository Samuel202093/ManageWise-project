import React from "react";

const FeatureCard = ({ data }) => {
  return (
    <div class="p-4 md:w-1/3y flex flex-col text-center items-center bg-bgSecondaryLight rounded-3xl px-[30px] pt-[50px] pb-[60px]">
      <div class="w-16 h-16 p-3 inline-flex items-center justify-center rounded-3xl bg-PurpleAccent  mb-5 flex-shrink-0">
        {data.svgImg}
      </div>
      <div class="flex-grow">
        {/* heading */}
        <h2 class="text-white text-[25px] title-font font-medium mb-3">
          {data.heading}
        </h2>
        {/* description */}
        <p class="leading-relaxed text-base text-[#767575]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
