"use client";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { useResume } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const { DATA, locale } = useResume();
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reducedMotion = mounted && prefersReducedMotion;
  const label = locale === "zh" ? (paused ? "继续滚动" : "暂停滚动") : (paused ? "Resume motion" : "Pause motion");
  const chip = (skill: (typeof DATA.skills)[number]) => (
    <div key={skill.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit shrink-0 px-4 flex items-center gap-2">
      <skill.icon className="size-4 rounded overflow-hidden object-contain" />
      <span className="text-foreground text-sm font-medium whitespace-nowrap">{skill.name}</span>
    </div>
  );
  return <div className="flex min-h-0 flex-col gap-y-4">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold">{DATA.copy.skills}</h2>
      {!reducedMotion && <Button variant="ghost" size="icon" className="size-8 text-muted-foreground" onClick={() => setPaused(v => !v)} aria-label={label} title={label} aria-pressed={paused}>
        {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
      </Button>}
    </div>
    {reducedMotion ? <div className="flex flex-wrap gap-2">{DATA.skills.map(chip)}</div> : <>
      <ul className="sr-only">{DATA.skills.map(skill => <li key={skill.name}>{skill.name}</li>)}</ul>
      <div aria-hidden="true" className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {[DATA.skills.slice(0, 6), DATA.skills.slice(6)].map((row, i) => <Marquee key={i} reverse={i === 1} repeat={2} pauseOnHover className={cn("[--duration:36s] [--gap:0.5rem] px-0 py-1.5", paused && "[&>div]:[animation-play-state:paused]")}>
          {row.map(chip)}
        </Marquee>)}
      </div>
    </>}
  </div>;
}
