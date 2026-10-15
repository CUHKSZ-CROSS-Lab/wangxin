"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import BackgroundPaths from "@/components/kokonutui/background-paths";

const Threads = dynamic(() => import("@/components/reactbits/threads"), { ssr: false });

export default function PageBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const dark = resolvedTheme === "dark";

  return <div
    aria-hidden="true"
    data-background={dark ? "threads" : "paths"}
    className="relative h-full w-full overflow-hidden"
    style={{
      maskImage: "linear-gradient(to bottom, black, transparent)",
      WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
    }}
  >
    {dark ? <Threads
      color="#ffffff"
      accentColor="#ffffff"
      amplitude={1.7}
      angle={0}
      speed={0.4}
      opacity={0.85}
      style={{ position: "absolute", top: -176, height: 512 }}
      enableMouseInteraction
    /> : <BackgroundPaths
      className="h-full min-h-0 bg-transparent text-foreground"
      count={42}
      spread={1}
      angle={-3}
      speed={0.6}
    >{null}</BackgroundPaths>}
  </div>;
}
