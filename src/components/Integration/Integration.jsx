import React from "react";

const Integration = () => {
  return (
    <div className="h-fit bg-bgSecondary pt-[100px]">
      <div className="and-more-features flex items-center flex-col w-[90%] md:w-[70%] mx-auto">
        <p className="mb-5 w-fit welcome-text text-PurpleAccent bg-white px-2 py-1 rounded-md border uppercase text-xs leading-[16px] tracking-wider font-medium">
          🛠 integrations
        </p>
        <h2 className="mb-5 text-[33px] md:text-[56px] font-medium  leading-[36px] md:leading-[56px] text-white ">
          <span className="hidden md:inline">
            Enable <span className="text-textOrangeAccent">integration</span>{" "}
            with <br />
            other popular tools and <br /> platforms
          </span>
          <span className="md:hidden block text-center">
            Enable <span className="text-textOrangeAccent">integration</span>{" "}
            with <br />
            other popular tools and <br /> platforms
          </span>
        </h2>
        <p className="text-center text-[#7F7E7D] leading-[30px] font-normal font-sans text-lg md:text-xl">
          <span className="hidden md:inline">
            Seamlessly connect and amplify your workflow
            <br />
            by enabling integration with a diverse array of
            <br />
            widely-used tools and platforms.
          </span>
          <span className="md:hidden block text-center">
            Seamlessly connect and amplify <br /> your workflow by enabling{" "}
            <br />
            integration with a diverse array of
            <br />
            widely-used tools and platforms.
          </span>
        </p>
        <div className="integration-img-container mt-20">
          <img
            src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
            alt="Integration"
            srcset="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=512 512w, https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png 1449w"
            sizes="min(min(95vw, 1200px), 580px)"
            className="block w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
