import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import ImageCustom from "../Image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageSlide = ({ images }: { images: any }) => {
  //
  const { dispatch } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  //
  return (
    <div className="w-full h-64 relative">
      {
        <i
          onClick={() =>
            setIndex(index - 1 < 0 ? images.length - 1 : index - 1)
          }
          className="bx bxs-chevron-left-circle text-3xl cursor-pointer absolute top-1/2 transform
          -translate-y-1/2 -left-7"
        />
      }
      <ImageCustom
        onClick={() => {
          dispatch({
            key: "index",
            value: index,
          });
          dispatch({
            key: "list",
            value: images,
          });
          dispatch({
            key: "type",
            value: 0,
          });
          dispatch({
            key: "preview",
            value: true,
          });
        }}
        src={images[index]?.src}
        className="w-full h-full cursor-pointer object-cover"
      />
      {images.length !== 0 && images.length > 1 && (
        <i
          onClick={() => setIndex(index + 1 === images.length ? 0 : index + 1)}
          className="bx bxs-chevron-right-circle text-3xl cursor-pointer absolute top-1/2 transform 
          -translate-y-1/2 -right-7"
        />
      )}
    </div>
  );
};

export default ImageSlide;
