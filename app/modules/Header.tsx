import React from "react";
import { PAGE_ABOUT_ME } from "../constants";
import avatar from "@/assets/images/avatar.jpg";
import Link from "next/link";
import routes from "../routes";
import { usePathname, useRouter } from "next/navigation";
import ImageCustom from "@/components/Image";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const newAvatar = "https://picsum.photos/536/354";
  return (
    <div
      className="w-full py-4 fixed top-0 bg-white z-50 shadow-lg border-b border-solid 
    border-gray-200"
    >
      <div className="wrapper flex justify-between box-border">
        <div
          aria-hidden
          onClick={() => router.push(PAGE_ABOUT_ME)}
          className="flex cursor-pointer"
        >
          <ImageCustom
            src={newAvatar ?? avatar}
            className="w-14 h-14 rounded-full mr-4 object-cover"
          />
          <div className=" items-center hidden lg:flex">
            <span className="font-bold text-2xl">Trà Tấn Hưởng</span>
            <span className="mx-2">/</span>
            <span className="text-gray-600">FULLSTACK DEVELOPER</span>
          </div>
        </div>
        <ul className="flex items-center">
          {routes.map(
            (route) =>
              route.to && (
                <li
                  key={route.name}
                  className={`lg:px-4 text-sm lg:text-base lg:py-1.5 p-1 md:px-2 rounded-full mx-0.5 lg:mx-1 font-semibold ${
                    (route.to.length === 1 && pathname.length > 1) ||
                    pathname.indexOf(route.to) === -1
                      ? "border-2 border-solid border-white hover:text-blue-600 hover:border-blue-600"
                      : "border-2 border-solid border-blue-600 text-blue-600"
                  }`}
                >
                  <Link href={route.to}>{route.name}</Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
