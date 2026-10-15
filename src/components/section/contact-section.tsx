"use client";
import Link from "next/link";
import ContactBackground from "@/components/contact-background";
import { useResume } from "@/components/language-provider";

export default function ContactSection() {
  const { DATA } = useResume();
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.copy.contact}</span>
      </div>
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <ContactBackground />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.copy.contactTitle}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.copy.contactIntro}{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-70 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {DATA.contact.email}
          </Link>{" "}
          {DATA.copy.contactOutro}
        </p>
      </div>
    </div>
  );
}
