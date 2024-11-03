import { Project } from "@/data/projects";
import ImageCustom from "../Image";
import { useState } from "react";

const PreviewImage = ({ project }: { project?: Project }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-2/3">
      <div className="w-full h-[500px] flex flex-col gap-3 overflow-hidden">
        <ImageCustom
          src={project?.url[current]?.link}
          className="w-full flex-1 border border-gray-200 shadow object-contain"
        />
        <div className="flex gap-3 items-center justify-center">
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
