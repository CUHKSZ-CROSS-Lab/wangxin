"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const Topography = dynamic(() => import("@/components/reactbits/topography"), { ssr: false });

export default function ContactBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const dark = resolvedTheme === "dark";

  return <div
    aria-hidden="true"
    data-background="topography"
    className="relative h-full w-full overflow-hidden"
    style={{
      maskImage: "linear-gradient(to bottom, black, transparent)",
      WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
    }}
  >
    <Topography
      color={dark ? "#d4d4d4" : "#404040"}
      lightMode={!dark}
      lineCount={22}
      lineWidth={1.1}
      speed={0.16}
      morph={0.12}
      glow={dark ? 0.15 : 0}
      depthOfField={0.1}
      brightness={0.9}
      opacity={dark ? 0.5 : 0.36}
      intro={false}
      clickEffect="none"
      dpr={1.5}
    />
  </div>;
}
