"use client";

import { useEffect, useState } from "react";

/**
 * 2px accent strip that fills as the reader scrolls through the post.
 * Pinned to viewport top, behind the header (z-30 sits below sticky header z-40).
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const ratio = Math.min(1, Math.max(0, doc.scrollTop / total));
      setProgress(ratio);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-30 h-[2px] w-full bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-editorial-accent origin-left"
        style={{
          transform: `scaleX(${progress})`,
          transition: "transform 80ms linear",
        }}
      />
    </div>
  );
}
