import React from "react";
import ContentList from "./ContentList";
import { v4 } from "uuid";

const PackageContentList = ({ data }) => {
  return (
    <>
      {data.map((content) => (
        <ContentList key={v4()} data={content} />
      ))}
    </>
  );
};

export default PackageContentList;
