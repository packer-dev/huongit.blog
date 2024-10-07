import { AppContext } from "@/contexts/AppContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const PreviewImageVideo = () => {
  //
  const {
    state: { list, type, index },
    dispatch,
  } = useContext(AppContext);
  const [pos, setPos] = useState(index);
  //
  return list ? (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-100 z-50">
      <div
        className={`w-full h-full flex flex-col relative ${
          type === 1 ? "bg-black bg-opacity-50" : ""
        }`}
      >
        <span
          aria-hidden
          onClick={() => {
            dispatch({ key: "index", value: 0 });
            dispatch({ key: "preview", value: false });
            dispatch({ key: "list", value: [] });
          }}
          className="bx bx-x w-10 h-10 hover:bg-gray-300 rounded-full flex z-50 items-center cursor-pointer
          justify-center text-white absolute top-4 right-4 bg-black bg-opacity-50 text-xl hover:text-black"
        ></span>
        <div className="flex-1 relative">
          {type === 0 ? (
            <>
              <div
                className="absolute top-0 left-0 bg-black"
                style={{ zIndex: -1 }}
              >
                <Image
                  src={list[pos].src}
                  alt=""
                  style={{ filter: "blur(10px)" }}
                  className="flex-1 object-cover bg-black opacity-50"
                />
              </div>
              <Image
                src={list[pos].src}
                alt=""
                className="w-3/4 max-h-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </>
          ) : (
            <video
              className="w-3/4 max-h-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
              controls
            >
              <track src={list[0].src} kind="captions" srcLang="en"></track>
            </video>
          )}
        </div>
        {type === 0 && (
          <div className="w-full flex items-end">
            <ul className="flex mx-auto gap-2 mb-3">
              {list.map((item, pos_) => (
                <li
                  aria-hidden
                  onClick={() => setPos(pos_)}
                  className="w-20 h-20 relative rounded-lg"
                  key={item.id}
                >
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full h-full cursor-pointer rounded-lg object-cover"
                  />
                  {pos !== pos_ && (
                    <div className="w-full h-full absolute top-0 left-0 z-10 bg-opacity-50 bg-black rounded-lg cursor-pointer " />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PreviewImageVideo;
