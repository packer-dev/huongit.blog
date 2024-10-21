"use client";

import Title from "@/components/Title";
import React, { useContext } from "react";
import ItemProject from "@/components/ItemProject";
import { AppContext } from "@/contexts/AppContext";

const Projects = () => {
  const {
    state: { projects },
  } = useContext(AppContext);
  return (
    <div id="projects" className="w-full bg-gray-100 pb-16">
      <div className="w-full box-content px-2 lg:w-2/3 mx-auto pt-16">
        <Title
          title="Projects"
          description="Below are some projects I did myself during my schooling and some
      projects I made at home to improve my skills."
        />
      </div>
      <div className="w-full box-content px-2 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 mx-auto gap-3 pt-10">
        {projects.map((item) => (
          <ItemProject key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
