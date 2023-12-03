import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Accordian = ({ data }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div
      className={`accordian px-8 py-6 rounded-xl mb-3 bg-bgPurpleLight lg:w-[700px]`}
      onClick={handleToggle}
    >
      <div className="flex gap-4 md:justify-between items-center ">
        <p
          className={`text-xl md:text-2xl font-semibold ${
            toggleIcon ? "text-PurpleAccent" : "text-black"
          }`}
        >
          {data.question}
        </p>
        {toggleIcon ? (
          <span className="font-medium text-2xl text-PurpleAccent">
            <MdOutlineClose />
          </span>
        ) : (
          <span className=" font-medium text-2xl  ">
            <FaPlus />
          </span>
        )}
      </div>
      <AnimatePresence>
        {toggleIcon && (
          <motion.p
            className="mt-10 text-[#7F7E7D] leading-[30px] font-normal font-sans text-base"
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordian;
