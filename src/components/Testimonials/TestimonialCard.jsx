import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <section class="h-fit">
      <div class="p-4 w-[300px] rounded-xl border">
        <div class="h-full bg-white p-8 rounded">
          <p class="leading-relaxed mb-6 text-black text-base font-medium">
            {data.remark}
          </p>
          <a class="inline-flex items-center">
            <img
              alt="testimonial"
              src="https://dummyimage.com/106x106"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">
                {data.name}
              </span>
              <span class="text-gray-500 capitalize text-sm">
                {" "}
                {data.profession}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
