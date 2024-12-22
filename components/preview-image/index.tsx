"use client";

import { Project } from "../../data/projects";
import ImageCustom from "../Image";
import { useEffect, useState } from "react";

const PreviewImage = ({ project }: { project?: Project }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeOut);
    }, 1000);
  }, [current]);
  return (
    <div className="sm:w-2/3">
      <div className="w-full h-[300px] sm:h-[500px] flex flex-col gap-3 overflow-hidden">
        <div className="flex-1 flex flex-col relative">
          {loading && (
            <div className="flex-1 animate-pulse bg-slate-200 absolute top-0 left-0 bottom-0 right-0"></div>
          )}
          <ImageCustom
            src={project?.url[current]?.link}
            className={`w-full flex-1 border border-gray-200 shadow object-contain ${
              loading ? "invisible" : "visible"
            }`}
          />
        </div>

        <div className="flex gap-3 items-center justify-center flex-wrap">
          {project?.url?.map((item, index) => (
            <span
              aria-hidden
              onClick={() => setCurrent(index)}
              key={item.id}
              className={`flex items-center p-1 font-semibold rounded-sm border border-blue-500 text-sm cursor-pointer 
          ${
            current === index
              ? "bg-blue-500 text-white"
              : "text-blue-500 hover:bg-blue-500 hover:text-white"
          } transition-all`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewImage;
