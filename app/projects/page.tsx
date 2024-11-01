import Main from "@/main";
import React from "react";

const Projects = () => {
  return <Main />;
};

export function generateStaticParams() {
  return [{ slug: ["/"] }];
}

export default Projects;
