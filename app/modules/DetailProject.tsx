"use client";

import ItemProject from "@/components/ItemProject";
import { PAGE_PROJECT } from "@/constants";
import { AppContext } from "@/contexts/AppContext";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const DetailProject = () => {
  const {
    state: { projects },
  } = useContext(AppContext);
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [project, setProject] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    setProject(
      projects.find((item) => item.id.toString() === params?.pathname)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);
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
      <div
        className="w-[960px] h-[690px] bg-cover scale-120"
        style={{
          backgroundImage: `url("https://nqhlmtbglaailxpcvkwb.supabase.co/storage/v1/object/public/packer-ui/screencapture-tratanhuong01-github-io-lovepop-clone-2024-10-21-22_01_10.png")`,
        }}
      />
      <p className="font-bold py-4 text-2xl">More project by me</p>
      <div className="w-full box-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-3">
        {projects.slice(0, 4).map((item) => (
          <ItemProject item={item} key={item.id} />
        ))}
      </div>
      <div className="pb-16"></div>
    </div>
  );
};

export default DetailProject;
