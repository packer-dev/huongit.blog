"use client";

import Image from "next/image";
import React from "react";

type ImageCustomProps = {
  src?: string;
  className?: string;
  onClick?: () => void;
  autoSizePercent?: number;
  object?: string;
  loading?: boolean;
};

const ImageCustom = ({
  src,
  className = "",
  onClick = () => {},
  autoSizePercent,
  object = "contain",
  loading,
}: ImageCustomProps) => {
  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={autoSizePercent ? { paddingTop: `${autoSizePercent}%` } : {}}
    >
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 ${
          loading ? "bg-slate-200 animate-pulse" : ""
        }`}
      >
        {!loading && (
          <Image
            className={`w-full h-full object-${object}`}
            onClick={() => onClick?.()}
            aria-hidden
            alt=""
            sizes="100"
            fill
            priority
            src={src ?? `https://picsum.photos/seed/picsum/536/354`}
          />
        )}
      </div>
    </div>
  );
};

export default ImageCustom;
