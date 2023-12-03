import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  // const linkStyle = "after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:bg-black after:right-0 after:top-[45%] after:ml-5 after:rounded-full"
  return (
    <footer class="nav-section-bg  md:border-b relative py-[50px] space-y-5">
      <div class=" w-[90%] lg:w-[70%] border-b pb-[100px] mb-5 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
        <div className="flex w-full md:w-fit">
          <a class="flex w-[180px] md:w-full mb-4 md:mb-0">
            <img
              src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
              alt="site_logo"
              className="md:h-[50px]"
            />
          </a>
        </div>
        <nav class="md:ml-auto flex-col md:h-fit text-center  w-full md:w-fit  gap-3 md:gap-3 flex  flex-wrap items-center text-base font-sans font-medium md:font-normal  pt-10 md:pt-0 justify-center">
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Features
            </span>
          </a>
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              FAQ
            </span>
          </a>
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Pricing
            </span>
          </a>
          <a class="md:mr-10 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Testimonials
            </span>
          </a>
        </nav>
      </div>
      {/* COPYRIGHT */}
      <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
        <p className="text-[#333333] text-base">
          &copy;{date} ManageWise, Inc.
        </p>
        {/* social icons */}
        <div className="social-icons-container flex items-center gap-3 text-black">
          <span className="text-2xl">
            <RiInstagramFill />
          </span>
          <span className="text-2xl">
            <FaSquareXTwitter />
          </span>
          <span className="text-2xl">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
