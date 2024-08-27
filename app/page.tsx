"use client";
import Preload from "./component/preload/Preload";
import { useState } from "react";

export default function Home() {
  // const [isLoading, setIsloading] = useState("");
  // setTimeout(() => {
  //   setIsloading("complate");
  // }, 7000);
  return (
    <div className="relative min-h-screen">
      {/* {isLoading?<Preload />: } */}
      <Preload />
    </div>
  );
}
