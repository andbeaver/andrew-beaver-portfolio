"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Same route — no transition needed
    if (pathname === prevPathname.current) return;

    // Start exit animation
    setStage("exit");

    const timeout = setTimeout(() => {
      // Swap content after exit completes
      setDisplayChildren(children);
      prevPathname.current = pathname;
      window.scrollTo({ top: 0 });
      setStage("enter");
    }, 200); // matches exit duration

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  // On first render or same-page update, keep children in sync
  useEffect(() => {
    if (pathname === prevPathname.current) {
      setDisplayChildren(children);
    }
  }, [children, pathname]);

  return (
    <div
      className={`transition-all duration-200 ease-in-out ${
        stage === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {displayChildren}
    </div>
  );
}
