import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const GsapMagnetic = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current?.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ref.current, { x: x });
      gsap.to(ref.current, { y: y });
    };
    const mouseLeave = (e) => {
      gsap.to(ref.current, { x: 0 });
      gsap.to(ref.current, { y: 0 });
    };

    ref.current?.addEventListener("mousemove", mouseMove);
    ref.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", mouseMove);
      ref.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
};

export default GsapMagnetic;
