import Title from "../components/Title";
import React, { ReactNode } from "react";

const ItemResume = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  //
  //
  return (
    <>
      <div className="border-l-8 mt-10 border-solid border-blue-600 pl-4 font-bold pb-2 text-2xl text-blue-600">
        {title}
      </div>
      <div className="text-gray-600 my-8">{children}</div>
    </>
  );
};

const Resume = () => {
  return (
    <div id="resume" className="w-full bg-gray-100">
      <div className="wrapper box-content px-2 mx-auto py-16">
        <Title
          title="Resume"
          description="Below are some projects I did myself during my schooling and some
            projects I made at home to improve my skills."
        />
        <p className="text-gray-600 w-1/2 mx-auto text-center"></p>
        <ItemResume title={"SKILLS"}>
          <p className="my-2 font-bold text-xl">English</p>
          <p> - Read and understand documents</p>
          <p> - Basic English communication skills</p>
          <p className="my-2 font-bold text-xl">Programming Language</p>
          <p>HTML, CSS, Javascript, PHP, Java, Python, Typescript</p>
          <p className="my-2 font-bold text-xl">Server Side Framework</p>
          <p>Spring boot, Laravel, NodeJS</p>
          <p className="my-2 font-bold text-xl">Database</p>
          <p>SQL Server, MySQL, PostgreSQL, Firebase</p>
          <p className="my-2 font-bold text-xl">Web Framework</p>
          <p>ReactJS, VueJS, NextJS</p>
          <p className="my-2 font-bold text-xl">Mobile Framework</p>
          <p>React Native</p>
          <p className="my-2 font-bold text-xl">Desktop Framework</p>
          <p>Winform, Java swing</p>
          <p className="my-2 font-bold text-xl">Open source</p>
          <p>AWS (Glue, Redshift, S3, DMS, Lambda, EC2)</p>
          <p>Supabase</p>
        </ItemResume>
        <ItemResume title={"EDUCATIONS"}>
          <p className="my-2 font-bold text-xl">
            Vietnam - Korea University of Information and Communication
            Technology
          </p>
          <p>8-2019 - 6-2022</p>
        </ItemResume>
      </div>
    </div>
  );
};

export default Resume;
