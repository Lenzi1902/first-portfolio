"use client";
import { useEffect, useState } from "react";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import LandingPage from "./component/landing-page/LandingPage";
import Preload from "./component/preload/Preload";
import Project from "./component/project/Project";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 11500);
      return () => clearTimeout(timeout);
    } else {
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <Preload />;
  }
  return (
    <>
      <div className="relative min-h-screen max-w-screen overflow-x-hidden bg-[#000000]">
        <LandingPage />
        <About />
        <Project />
        <Footer />
      </div>
    </>
  );
}
