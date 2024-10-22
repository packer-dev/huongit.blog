"use client";

import Header from "@/modules/Header";
import React, { ReactNode, useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import routes from "./routes";
// import NotFound from "./NotFound";
import Footer from "./modules/Footer";
import PreviewImageVideo from "./modules/PreviewImageVideo";
import { usePathname } from "next/navigation";

export type ContainerProps = {
  children?: ReactNode;
  landingPage?: boolean;
};

const Container = ({ children, landingPage = true }: ContainerProps) => {
  const {
    state: { loading, preview },
    dispatch,
  } = useContext(AppContext);
  const pathname = usePathname();
  const index = routes.findIndex((route) => route.to === pathname);
  useEffect(() => {
    //
    let timeOut: ReturnType<typeof setTimeout>;
    if (index !== -1) {
      dispatch({
        key: "loading",
        value: true,
      });
      timeOut = setTimeout(() => {
        const pathname_ =
          pathname.replace("/", "") === ""
            ? "about-me"
            : pathname.replace("/", "");
        if (document.getElementById(pathname_)) {
          const top =
            document.getElementById(pathname_)?.getBoundingClientRect()?.top ??
            0;
          window.scrollTo(0, top + window.scrollY - 40);
        }
        dispatch({ key: "loading", value: false });
      }, 500);
    } else {
      dispatch({ key: "loading", value: false });
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div className="w-full">
      <Header />
      {/* {index !== -1 ? ( */}
      {loading && (
        <div
          className="w-full items-center justify-center flex fixed"
          style={{ height: "calc(100vh)", top: 88 }}
        >
          <i className="bx bx-loader-alt text-7xl circle__loading text-blue-600"></i>
        </div>
      )}
      {landingPage ? (
        <div
          className={`w-full ${loading ? "invisible" : ""}`}
          style={{
            paddingTop: "88px",
            ...(index === -1 ? { height: "calc(100vh - 88px)" } : {}),
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
      {/* ) : (
        <NotFound />
      )} */}
      <Footer />
      {preview && <PreviewImageVideo />}
    </div>
  );
};

export default Container;
