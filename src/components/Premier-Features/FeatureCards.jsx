import React from "react";

const FeatureCards = ({ data }) => {
  return (
    <div className="rounded-2xl border flex flex-col h-min">
      <div className="basis-4/5 w-full">{data.imgSrc}</div>
      <div className="flex flex-col md:gap-[10px] mt-[40px] mb-[30px] px-[30px]">
        <p className="font-medium text-[25px] text-bgSecondary leading-[33px]">
          {data.heading}
        </p>

        <p className="text-[16px] text-[#767575] leading-[24px] font-normal">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
