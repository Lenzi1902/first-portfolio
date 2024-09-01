"use client";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import LandingPage from "./component/landing-page/LandingPage";

export default function Home() {
  return (
    <div className="relative min-h-screen max-h-screen overflow-x-hidden">
      {/* {isLoading?<Preload />: } */}
      {/* <Preload /> */}
      <LandingPage />
      <About />
      <Footer />
    </div>
  );
}
