"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatedPageOut } from "../utils/animaitionsPageTransition";

type Props = {
  href: string;
  label: string;
  className?: string;
};

const TranisitionLink = ({ href, label, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const hadnleCLick = () => {
    if (pathname !== href) {
      animatedPageOut(href, router);
    }
  };
  return (
    <button onClick={hadnleCLick} className={`${className}`}>
      {label}
    </button>
  );
};

export default TranisitionLink;
