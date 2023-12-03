import React from "react";

const ContentList = ({ data }) => {
  return (
    <p class="flex items-center text-gray-600 mb-2">
      <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-transparent text-white rounded-full flex-shrink-0">
        <svg
          viewBox="0 0 20 20"
          fill="#42D67D"
          width="24"
          height="24"
          color="rgb(255, 255, 255)"
          className="w-full h-full"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      {data}
    </p>
  );
};

export default ContentList;
