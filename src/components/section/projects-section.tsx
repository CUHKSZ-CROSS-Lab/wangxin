"use client";
import { useRef, useState } from "react";
import ProjectDetails from "@/components/project-details";
import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { ProjectCard } from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResume } from "@/components/language-provider";

export default function ProjectsSection() {
  const { DATA, locale } = useResume();
  const [selected, setSelected] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const categories = [
    { value: "all", label: locale === "zh" ? "全部项目" : "All projects", category: null },
    { value: "ai", label: locale === "zh" ? "AI 应用" : "AI applications", category: "AI" },
    { value: "supply", label: locale === "zh" ? "供应链" : "Supply chain", category: "供应链" },
  ];
  return <section>
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1"><span className="text-background text-sm font-medium">{DATA.copy.projects}</span></div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{DATA.copy.projectsTitle}</h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">{DATA.copy.projectsIntro}</p>
        </div>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center"><TabsList aria-label={locale === "zh" ? "项目分类" : "Project categories"}>
          {categories.map(category => <TabsTrigger key={category.value} value={category.value} className="px-2.5 text-xs sm:px-3 sm:text-sm">{category.label}</TabsTrigger>)}
        </TabsList></div>
        {categories.map(category => <TabsContent key={category.value} value={category.value} className="mt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
            {DATA.projects.map((project, id) => ({ project, id })).filter(({ project }) => !category.category || project.detail.category === category.category).map(({ project, id }, index) => (
              <BlurFade key={project.detail.id} delay={index * 0.05} className="h-full">
                <MagicCard gradientFrom="#737373" gradientTo="#d4d4d4" gradientColor="var(--muted)" gradientOpacity={0.18} gradientSize={240} className="h-full rounded-xl [&>div:last-child]:h-full">
                  <ProjectCard
                    className="border-0 hover:ring-0"
                    openLabel={DATA.copy.details} coverAlt={DATA.copy.coverAlt}
                    onOpen={() => { opener.current = document.activeElement as HTMLElement; setSelected(id); setDetailsOpen(true); }}
                    href={project.href} title={project.title} description={project.description} dates={project.dates}
                    tags={project.technologies} image={project.image} video={project.video} links={project.links}
                  />
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </TabsContent>)}
      </Tabs>
    </div>
    <ProjectDetails project={selected === null ? null : DATA.projects[selected].detail} open={detailsOpen} onOpenChange={setDetailsOpen} onRestoreFocus={() => opener.current?.focus()} />
  </section>;
}
