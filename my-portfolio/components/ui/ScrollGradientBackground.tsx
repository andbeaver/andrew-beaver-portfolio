"use client";

import { useEffect } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ScrollGradientBackground() {
  useEffect(() => {
    let cx1 = 5, cy1 = 0, cx2 = 95, cy2 = 5;
    let raf: number;
    let running = true;

    const isDark = () =>
      document.documentElement.classList.contains("dark");

    const getProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      return maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const loop = () => {
      if (!running) return;

      const p = getProgress();
      const tx1 = 5  + p * 14;
      const ty1 = 0  + p * 22;
      const tx2 = 95 - p * 12;
      const ty2 = 5  + p * 18;

      cx1 = lerp(cx1, tx1, 0.04);
      cy1 = lerp(cy1, ty1, 0.04);
      cx2 = lerp(cx2, tx2, 0.04);
      cy2 = lerp(cy2, ty2, 0.04);

      const dark = isDark();
      const a1 = dark ? 0.15 : 0.12;
      const a2 = dark ? 0.10 : 0.08;

      // Paint directly onto body so it sits above the solid bg-color
      document.body.style.backgroundImage = [
        `radial-gradient(ellipse 80% 60% at ${cx1.toFixed(2)}% ${cy1.toFixed(2)}%, rgba(99,102,241,${a1}) 0%, transparent 70%)`,
        `radial-gradient(ellipse 60% 50% at ${cx2.toFixed(2)}% ${cy2.toFixed(2)}%, rgba(139,92,246,${a2}) 0%, transparent 65%)`,
      ].join(", ");

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.body.style.backgroundImage = "";
    };
  }, []);

  return null;
}
