import React from "react";
import { featureCardData } from "./data";
import FeatureCards from "./FeatureCards";
import { v4 } from "uuid";

const PremierFeature = () => {
  return (
    <div className="flex flex-col mt-[20px] md:mt-[100px] gap-20 flex-nowrap h-fit justify-center overflow-hidden pt-[100px] items-center bg-textPrimary features">
      <div className="description-text">
        <div className="w-full mb-20 flex flex-col justify-center items-center">
          <p className="mb-2 welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
            🔥 Premier Features
          </p>
          <h1 className="mb-5 text-[35px] lg:text-[56px] font-medium leading-[35px] lg:leading-[56px] text-black text-center">
            Discover our product's{" "}
            <span className="text-textOrangeAccent">Capabilities</span>
          </h1>
          <p className="mission-statement text-center text-[#7F7E7D] font-normal font-sans text-lg md:text-xl">
            <span className="hidden md:inline">
              Don't settle for mediocrity - embrace the future of management
              <br />
              with Manage Wise.
            </span>
            <span className="inline md:hidden">
              Don't settle for mediocrity - embrace the <br /> future of
              management with Manage Wise.
            </span>
          </p>
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 w-[90%] md:w-[70%] mx-auto">
          {/* left side */}
          <div className="left-side space-y-5 flex flex-col justify-center rounded-xl border px-[40px] pt-[78px] pb-[35px] bg-bgPurpleMedium">
            <p className="text-[28px] font-semibold w-fit py-1 px-3 bg-white rounded-2xl">
              ⭐️
            </p>
            <p className="font-normal md:font-medium  text-black text-[28px] lg:text-[42px] leading-[35px] lg:leading-[54.6px] tracking-[-1px]">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </p>
          </div>
          {/* right side */}
          <div className="right-side rounded-xl border flex flex-col lg:h-[500px]">
            <div className="basis-4/5">
              <img
                src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png"
                alt="Task management"
                srcset="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=512 512w, https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png 1740w"
                sizes="min(580px, 100vw)"
                className="block w-full h-full object-center object-cover md:object-contain"
              />
            </div>
            <div className="flex flex-col md:gap-[10px] mt-[40px] mb-[30px] px-[30px]">
              <p className="font-medium text-[25px] text-bgSecondary leading-[33px]">
                Smart Task Management
              </p>
              <p className="text-[16px] text-[#767575] leading-[24px] font-normal">
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] md:w-[70%]  mx-auto mt-[80px]">
          {featureCardData.map((feature) => (
            <FeatureCards key={v4()} data={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremierFeature;
