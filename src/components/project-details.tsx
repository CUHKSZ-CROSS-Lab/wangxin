"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useResume } from "@/components/language-provider";
import type { Project } from "@/data/profile";

export default function ProjectDetails({ project, open, onOpenChange, onRestoreFocus }: {
  project: Project | null; open: boolean; onOpenChange: (open: boolean) => void; onRestoreFocus: () => void;
}) {
  const { DATA } = useResume();
  return <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent side="right" closeLabel={DATA.copy.close} className="w-full overflow-y-auto p-6 sm:max-w-xl sm:p-10" onCloseAutoFocus={event => { event.preventDefault(); onRestoreFocus(); }}>
      {project && <>
        <SheetHeader className="text-left">
          <p className="mb-2 text-xs text-muted-foreground">{project.label}</p>
          <SheetTitle className="pr-6 text-balance text-2xl font-semibold tracking-tight">{project.title}</SheetTitle>
          <SheetDescription className="pt-2 leading-relaxed">{project.description}</SheetDescription>
        </SheetHeader>
        <div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map(tag => <Badge variant="outline" key={tag} className="font-normal">{tag}</Badge>)}</div>
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          <section><h3 className="mb-2 font-semibold">{DATA.copy.context}</h3><p className="text-muted-foreground">{project.context}</p></section>
          <section><h3 className="mb-2 font-semibold">{DATA.copy.role}</h3><p className="text-muted-foreground">{project.role}</p></section>
          <section><h3 className="mb-2 font-semibold">{DATA.copy.approach}</h3><ol className="list-decimal space-y-2 pl-5 text-muted-foreground">{project.approach.map(line => <li key={line}>{line}</li>)}</ol></section>
          <section><h3 className="mb-2 font-semibold">{DATA.copy.delivery}</h3><p className="text-muted-foreground">{project.delivery}</p></section>
        </div>
        <p className="mt-8 border-t pt-4 text-xs leading-relaxed text-muted-foreground">{DATA.copy.imageNote}</p>
      </>}
    </SheetContent>
  </Sheet>;
}
