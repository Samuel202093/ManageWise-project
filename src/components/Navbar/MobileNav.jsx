import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          class={`bg-white z-50 flex-col absolute md:relative md:top-0 md:h-fit top-[100%] bg-red-900y w-full md:w-fit h-[90vh] gap-10 md:gap-0 flex md:flex-row flex-wrap items-center text-base font-sans  font-normal justify-start pt-10 md:pt-0 lg:justify-center`}
        >
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Features
            </span>
            <span className="h-[4px] w-[4px]  bg-[#dacdc1] hidden lg:inline"></span>
          </a>
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              FAQ
            </span>
            <span className="h-[4px] w-[4px]  bg-[#dacdc1] hidden lg:inline"></span>
          </a>
          <a class="md:mr-7 flex items-center justify-start gap-7 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Pricing
            </span>
            <span className="h-[4px] w-[4px]  bg-[#dacdc1] hidden lg:inline"></span>
          </a>
          <a class="md:mr-10 hover:text-gray-900 relative">
            <span className="hover:text-PurpleAccent transition-all cursor-pointer ">
              Testimonials
            </span>
          </a>
          <button class="inline-flex border md:hidden items-center border-[rgb(237,237,250)] bg-PurpleAccent w-[90%] justify-center rounded-md py-3 px-5 focus:outline-none  text-white text-lg mt-4 md:mt-0 font-medium font-sans transition-all">
            Buy Template
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
