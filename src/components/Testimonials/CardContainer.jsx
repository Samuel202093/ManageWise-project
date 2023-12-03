import React from "react";
import TestimonialCard from "./TestimonialCard";
import { v4 } from "uuid";
import { testimonialInfo } from "./data";

const CardContainer = () => {
  // console.log(testimonialData.length);
  return (
    <div class=" marquee-content">
      {/* this is where we write the loop */}
      {testimonialInfo.map((datum) => (
        <TestimonialCard key={v4()} data={datum} />
      ))}
    </div>
  );
};

export default CardContainer;
