"use client";

import Image from "next/image";
import React from "react";

type ImageCustomProps = {
  src?: string;
  className?: string;
  onClick?: () => void;
  autoSizePercent?: number;
};

const ImageCustom = ({
  src,
  className = "",
  onClick = () => {},
  autoSizePercent,
}: ImageCustomProps) => {
  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={autoSizePercent ? { paddingTop: `${autoSizePercent}%` } : {}}
    >
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
          onClick={() => onClick?.()}
          aria-hidden
          alt=""
          fill
          src={src || `https://picsum.photos/seed/picsum/536/354`}
        />
      </div>
    </div>
  );
};

export default ImageCustom;
