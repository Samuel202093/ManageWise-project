import React from "react";
import { featuresCardData } from "./data";
import FeatureCard from "./FeatureCard";
import { v4 } from "uuid";

const MoreFeatures = () => {
  return (
    <div className="min-h-[100vh] bg-bgSecondary mt-20 pt-[60px] md:pt-[100px] ">
      <div className="and-more-features flex flex-col w-[90%] lg:w-[70%] mx-auto">
        <p className="mb-5 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          🤩 and more...
        </p>
        <h2 className="mb-5 text-4xl lg:text-[56px] md:text-[43px] font-medium leading-[36px] md:leading-[45px] lg:leading-[56px] text-white ">
          <span className="hidden lg:inline">
            Explore an array of features that elevate your <br />
            <span className="text-textOrangeAccent">Productivity</span> to new
            heights
          </span>
          <span className="md:hidden inline">
            Explore an array of features that elevate <br /> your
            <span className="text-textOrangeAccent"> Productivity</span> to{" "}
            <br /> new heights
          </span>
          <span className="hidden md:inline lg:hidden">
            Explore an array of features that elevate your
            <span className="text-textOrangeAccent"> Productivity</span> to new
            <br />
            heights
          </span>
        </h2>
        <p className="mission-statement  text-[#7F7E7D] font-normal font-sans text-lg md:text-xl">
          <span className="hidden md:inline">
            Discover the tools that will revolutionize the way you
            <br />
            manage and optimize your operations.
          </span>
          <span className="md:hidden inline">
            Discover the tools that will revolutionize <br /> the way you manage
            and optimize your operations.
          </span>
        </p>
        {/*  */}
        <div className="mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10">
            {featuresCardData.map((features) => (
              <FeatureCard key={v4()} data={features} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
