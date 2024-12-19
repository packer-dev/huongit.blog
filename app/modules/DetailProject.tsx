"use client";

import ItemProject from "@/components/ItemProject";
import Technology from "@/components/ItemProject/Technology";
import { Button } from "@/components/ui/button";
import { PAGE_PROJECT } from "@/constants";
import { AppContext } from "@/contexts/AppContext";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { Project } from "@/data/projects";
import PreviewImage from "@/components/preview-image";

const DetailProject = () => {
  const {
    state: { projects },
  } = useContext(AppContext);
  const params = useParams();
  const [project, setProject] = useState<Project>();
  const router = useRouter();
  useEffect(() => {
    const index = projects.findIndex(
      (item) => item.id.toString() === params?.pathname
    );
    if (index === -1) return;

    setProject(projects[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.pathname]);
  return (
    <div className="wrapper box-content px-2 mx-auto pb-6 pt-[96px]">
      <div className="flex gap-2 items-center py-2 text-gray-600 font-semibold">
        <span
          aria-hidden
          onClick={() => router.push(PAGE_PROJECT)}
          className="cursor-pointer"
        >
          Projects
        </span>
        <span className="bx bx-chevron-right"></span>
        <span className="font-bold text-black cursor-pointer">
          {project?.name}
        </span>
      </div>
      <div className="sm:flex gap-3">
        <PreviewImage project={project} />
        <div className="flex-1 flex flex-col">
          <p className="font-bold text-gray-600">Projects:</p>
          <p className="font-semibold">{project?.name}</p>
          <div className="flex-wrap gap-2 items-center my-2 flex">
            <span className="font-bold text-gray-600">Technologies:</span>
            {project?.use.split(", ").map((child: string) => (
              <Technology key={child} tech={child} />
            ))}
          </div>
          <p className="font-bold text-gray-600">Description:</p>
          <div className="flex-1 relative">
            <p
              className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden text-justify 
            text-ellipsis"
            >
              Fusta – Furniture Shopify Theme + RTL + Dropshipping is an
              awesome, easy & eye catchy eCommerce website. This theme is
              perfect for Fashion, Cosmetics, Resturant, Jewellery, Home
              appliances, Bag, Watch, Flower, Shoes, Power- Tool as well as Pet
              Store. This Shopify theme looks nice for its simple and elegant
              design. This theme is very clean and updates that’s why you can
              use this theme in your own way on your store. very clean and
              updates that’s why you can use this theme in your own way on your
              store. this theme in your own way on your store. this theme in
              your own way on your store. this theme in your own way on your
              store. in your own way on your store. in your own way on your
              store. your own way on your store. your own way on your store.
              your own way on your store. your own way on your store. your own
              way on your store...
            </p>
          </div>
          {!!project?.preview && (
            <Button
              onClick={() => window.open(project?.preview, "_blank")}
              className="bg-blue-500 mt-2"
            >
              Preview now
            </Button>
          )}
        </div>
      </div>
      <p className="font-bold py-4 text-2xl">More project by me</p>
      <div className="w-full box-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-3">
        {project &&
          projects
            .filter((item) => item.id !== params?.pathname)
            .slice(0, 4)
            .map((item) => <ItemProject item={item} key={item.id} />)}
      </div>
      <div className="pb-16"></div>
    </div>
  );
};

export default DetailProject;
