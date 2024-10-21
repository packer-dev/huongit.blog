import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Link from "next/link";
import ImageCustom from "../Image";

const ItemProject = ({ item }: { item: any }) => {
  return (
    <Link
      href={`/projects/${item.id}`}
      className="relative pb-2 border border-gray-300 shadow-md"
    >
      <div className="relative">
        <ImageCustom
          autoSizePercent={60}
          className="rounded-sm cursor-pointer"
        />
        <div
          className="px-1.5 py-1 rounded-sm bg-green-500 w-auto my-2 inline-block justify-center 
        text-white absolute top-1 left-3"
        >
          <span className="bx bx-timer mr-1"></span>
          <span className="text-sm relative -top-0.5 font-semibold">
            Time : 2 months
          </span>
        </div>
      </div>
      <div className="px-3">
        <p
          className="font-semibold text-gray-600 pt-1 block mt-1 cursor-pointer hover:text-blue-500 
      whitespace-nowrap text-ellipsis w-full overflow-hidden"
        >
          {item.name}
        </p>

        <p className="text-xs text-gray-500 font-semibold">
          <i className="text-xs">by</i> Packer Tra
        </p>
        <div className="flex-wrap gap-2 items-center my-2 flex">
          <span className="text-sm font-bold text-gray-600">Technologies:</span>
          <span className="bg-blue-800 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            React
          </span>
          <span className="bg-orange-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            HTML
          </span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            CSS
          </span>
          <span className="bg-yellow-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            JS
          </span>
          <span className="bg-green-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            Spring boot
          </span>
          <span className="bg-gray-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            Java
          </span>
          <span className="bg-red-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            Socket IO
          </span>
          <span className="bg-amber-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            Web RTC
          </span>
          <span className="bg-blue-900 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
            TS
          </span>
        </div>
        <div className="flex justify-between pt-4 mb-2 items-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="bx bxl-github text-3xl cursor-pointer"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2 bg-gray-900 text-white font-semibold">
              <p className="text-xs">Github</p>
            </HoverCardContent>
          </HoverCard>
          <span
            className="px-3 py-2 text-blue-900 border-blue-900 border border-solid cursor-pointer transition-all 
            hover:bg-blue-900 hover:text-white"
          >
            View
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ItemProject;
