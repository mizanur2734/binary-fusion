import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center py-72">
      <DotLoader color="#12BF7C" />
    </div>
  );
};

export default Loading;
