import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../contexts/AppContext";
import ImageSlide from "./ImageSlide";

function Button({
  type,
  button,
  name,
  setType,
}: {
  type: number;
  button: number;
  name: string;
  setType: (type: number) => void;
}) {
  return (
    <button
      onClick={() => setType(button)}
      className={` mr-3 flex justify-items-end  px-5 py-2 rounded-full font-semibold border-2 
        border-solid ${
          type === button
            ? "bg-gray-600 text-white hover:bg-gray-300 hover:text-gray-800 hover:border-gray-500"
            : "bg-gray-300 text-gray-800 border-gray-500 hover:bg-gray-600 hover:text-white"
        }`}
    >
      {name}
    </button>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ItemProject({ item }: { item: any }) {
  //
  const { dispatch } = useContext(AppContext);
  const refVideo = useRef<HTMLVideoElement>(null);
  const [type, setType] = useState(0);
  //
  return (
    <div className="w-full box-border py-6 bg-white flex my-6 md:my-12 flex-col md:flex-row">
      <div className="w-full md:w-7/12">
        <div className="border-l-8 border-solid border-blue-600 pl-4 font-semibold mb-2 text-2xl text-blue-600">
          {item.name}
        </div>
        <div className="p-3">
          <p className="text-gray-600 mb-3 font-semibold">
            Description: <span className="font-thin">{item.description}</span>
          </p>
          {item?.demo?.length === 1 ? (
            <>
              <p className="text-gray-600 font-semibold mb-3">
                Link demo:
                <span
                  onClick={() => window.open(item?.demo[0]?.link)}
                  className="font-thin hover:underline text-blue-500 cursor-pointer ml-1"
                >
                  {item?.demo[0]?.link}
                </span>
              </p>
              {item?.demo[0]?.account && (
                <p className="mb-3">
                  <span className="font-semibold text-gray-600">
                    Account Demo
                  </span>
                  : (username: {item?.demo[0]?.account?.username} , password:{" "}
                  {item?.demo[0]?.account?.password})
                </p>
              )}
            </>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            item?.demo?.map((dt: any) => (
              <div key={dt?.id}>
                <p className="text-gray-600 font-semibold mb-3">
                  {dt.name}
                  <span
                    onClick={() => window.open(dt.link)}
                    className="font-thin hover:underline text-blue-500 cursor-pointer"
                  >
                    {dt.link}
                  </span>
                </p>
                {dt.account && (
                  <p className="mb-3">
                    <span className="font-semibold text-gray-600">
                      Account Demo
                    </span>
                    : (username: {dt.account.username} , password:{" "}
                    {dt.account.password})
                  </p>
                )}
              </div>
            ))
          )}
          {item?.github?.length === 1 ? (
            <p className="text-gray-600 font-semibold mb-3">
              Github:
              <span
                onClick={() => window.open(item.github[0].link)}
                className="font-thin hover:underline text-blue-500 cursor-pointer ml-1"
              >
                {item.github[0].link}
              </span>
            </p>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            item?.github?.map((dt: any) => (
              <div key={dt?.id}>
                <p className="text-gray-600 font-semibold mb-3">
                  {dt.name}
                  <span
                    onClick={() => window.open(dt.link)}
                    className="font-thin hover:underline text-blue-500 cursor-pointer ml-1"
                  >
                    {dt.link}
                  </span>
                </p>
              </div>
            ))
          )}
          <p className="text-gray-600 font-semibold mb-3">
            Language, libraries, technology used:{" "}
            <span className="font-thin">{item.use}</span>
          </p>
          <p className="text-gray-600 font-semibold mb-3">
            Completion time: <span className="font-thin">{item.time}</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-5/12 px-3 box-border">
        <div className="flex my-2">
          <Button name="Video" button={0} type={type} setType={setType} />
          <Button name="Pictures" button={1} type={type} setType={setType} />
        </div>
        {type === 0 ? (
          <div className="w-full h-72 md:h-64 bg-gray-200">
            <video
              ref={refVideo}
              onClick={() => {
                dispatch({
                  key: "index",
                  value: 0,
                });
                dispatch({
                  key: "list",
                  value: [item.video],
                });
                dispatch({
                  key: "type",
                  value: 1,
                });
                dispatch({
                  key: "preview",
                  value: true,
                });
                refVideo.current?.play();
              }}
              src={item.video}
              className="w-full h-full object-cover"
              controls
            />
          </div>
        ) : (
          <ImageSlide images={item.images} />
        )}
      </div>
    </div>
  );
}

export default ItemProject;
