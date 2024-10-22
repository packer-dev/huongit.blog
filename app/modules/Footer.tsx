import React from "react";
import FollowMe from "./FollowMe";

const Footer = () => {
  return (
    <div className="py-4 px-2 box-content">
      <div className="wrapper flex justify-between flex-col md:flex-row">
        <div className="text-gray-600 flex items-center md:mb-0 text-center md:text-left">
          © 2022 by Trà Tấn Hưởng
        </div>
        <ul className="flex justify-around md:justify-center">
          <li className="justify-center flex flex-col mx-4 md:mx-7">
            <span className="font-bold mb-2 text-center">Phone</span>
            <span className="text-gray-600">+84354114665</span>
          </li>
          <li className="justify-center flex flex-col mx-4 md:mx-7">
            <span className="font-bold mb-2 text-center">Email</span>
            <span className="text-gray-600">tratanhuong01@gmail.com</span>
          </li>
          <li className="justify-center flex flex-col mx-4 md:ml-7">
            <span className="font-bold mb-2 text-center">Follow</span>
            <FollowMe />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
