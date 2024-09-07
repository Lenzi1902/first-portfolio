"use client";
import { useEffect, useState } from "react";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import LandingPage from "./component/landing-page/LandingPage";
import Preload from "./component/preload/Preload";
import Project from "./component/project/Project";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 11500);
  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <>
      {/* {isLoading ? (
        <Preload />
      ) : (
        <div className="relative min-h-screen max-h-screen overflow-x-hidden">
          <LandingPage />
          <About />
          <Project />
          <Footer />
        </div>
      )} */}
      <div className="relative min-h-screen max-w-screen overflow-x-hidden bg-[#000000]">
        <LandingPage />
        <About />
        <Project />
        <Footer />
      </div>
    </>
  );
}
