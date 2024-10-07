"use client";

import React from "react";
import {
  LINK_FACEBOOK,
  LINK_GITHUB,
  LINK_INSTAGRAM,
  LINK_LINKEDIN,
} from "../constants";

const ItemFollowMe = ({ icon, to }: { icon: string; to: string }) => {
  return (
    <li
      aria-hidden
      onClick={() => window.open(to)}
      className="px-2 cursor-pointer"
    >
      <i className={`${icon} text-xl hover:text-gray-600`}></i>
    </li>
  );
};

const FollowMe = () => {
  return (
    <ul className="flex">
      <ItemFollowMe icon="bx bxl-facebook" to={LINK_FACEBOOK} />
      <ItemFollowMe icon="bx bxl-github" to={LINK_GITHUB} />
      <ItemFollowMe icon="bx bxl-instagram" to={LINK_INSTAGRAM} />
      <ItemFollowMe icon="bx bxl-linkedin" to={LINK_LINKEDIN} />
    </ul>
  );
};

export default FollowMe;
