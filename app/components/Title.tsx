import React from "react";

const Title = ({
  description,
  title,
}: {
  description?: string;
  title: string;
}) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="bg-blue-600 w-4 h-4 mr-3"></div>
        <span className="text-4xl font-bold mb-2">{title}</span>
      </div>
      {description && (
        <p className="text-gray-600 w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center">
          {description}
        </p>
      )}
    </>
  );
};

export default Title;
