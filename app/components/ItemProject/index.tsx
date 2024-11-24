import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Link from "next/link";
import ImageCustom from "../Image";
import Technology from "./Technology";
import { Project } from "@/data/projects";

type ItemProjectProps = { item: Project; loading?: boolean };

const ItemProject = ({ item, loading }: ItemProjectProps) => {
  return (
    <div
      className={`w-full relative border border-gray-300 shadow-md cursor-pointer hover:opacity-70 ${
        loading ? "animate-pulse" : ""
      }`}
    >
      <div className="relative">
        <Link href={`/projects/${item.id}`} className="relative">
          <ImageCustom
            loading={loading}
            autoSizePercent={60}
            src={item.thumbnail}
            className="rounded-sm cursor-pointer object-contain"
          />
        </Link>
        {loading ? (
          <div className="h-2 animate-pulse rounded-sm bg-slate-400 w-16 my-2 inline-block absolute top-1 left-3" />
        ) : (
          <div
            className="px-1.5 py-1 rounded-sm bg-green-500 w-auto my-2 inline-block justify-center 
          text-white absolute top-1 left-3"
          >
            <span className="bx bx-timer mr-1"></span>
            <span className="text-sm relative -top-0.5 font-semibold">
              Time : 2 months
            </span>
          </div>
        )}
      </div>
      <div className="p-3 bg-white">
        {loading ? (
          <p className="h-2 pt-1 bg-slate-200 rounded-lg" />
        ) : (
          <p
            className="font-semibold text-gray-600 pt-1 block cursor-pointer hover:text-blue-500 
          whitespace-nowrap text-ellipsis w-full overflow-hidden"
          >
            {item.name}
          </p>
        )}
        {loading ? (
          <p className="h-2 bg-slate-200 w-12 mt-1 rounded-lg" />
        ) : (
          <p className="text-xs text-gray-500 font-semibold">
            <i className="text-xs">by</i> Packer Tra
          </p>
        )}
        {loading ? (
          <div className="flex-wrap gap-2 items-center my-2 flex opacity-85">
            <span className="h-2 bg-slate-200 block w-16" />
            {item.use.split(", ").map((child: string) => (
              <Technology key={child} tech={child} />
            ))}
          </div>
        ) : (
          <div className="flex-wrap gap-2 items-center my-2 flex opacity-85">
            <span className="text-sm font-bold text-gray-600">
              Technologies:
            </span>
            {(loading ? ", , , " : item.use)
              .split(", ")
              .map((child: string) => (
                <Technology key={child} tech={child} loading={loading} />
              ))}
          </div>
        )}
        <div className="flex justify-between pt-4 items-center">
          <HoverCard>
            <HoverCardTrigger
              onClick={() => window.open(item.github, "_blank")}
              asChild
            >
              {item.github ? (
                <span className="bx bxl-github text-3xl cursor-pointer" />
              ) : (
                <span className="bx bxs-lock-alt text-3xl cursor-pointer" />
              )}
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2 bg-gray-900 text-white font-semibold">
              <p className="text-xs">
                {item.github ? "Github" : "This project is private"}
              </p>
            </HoverCardContent>
          </HoverCard>
          <Link
            href={`/projects/${item.id}`}
            className="px-3 py-2 text-blue-900 border-blue-900 border border-solid cursor-pointer transition-all 
            hover:bg-blue-900 hover:text-white"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemProject;
