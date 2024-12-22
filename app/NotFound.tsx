import React from "react";
import ImageCustom from "../components/Image";

const NotFound = () => {
  return (
    <div
      className="w-full items-center justify-center flex bg-gray-100"
      style={{ height: "calc(100vh)" }}
    >
      <ImageCustom
        src="https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg"
        className="w-1/3 mx-auto"
      />
    </div>
  );
};

export default NotFound;
