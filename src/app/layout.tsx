import { LanguageProvider } from "@/components/language-provider";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/site";
import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import PageBackground from "@/components/page-background";

export const metadata: Metadata = {
  icons: { icon: assetPath("/wangxin.png") },
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  alternates: { canonical: DATA.url },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        style={{ "--font-sans": 'Geist, "Geist Fallback", "PingFang SC", "Microsoft YaHei", sans-serif', "--font-mono": '"Geist Mono", "Geist Mono Fallback"' } as React.CSSProperties}
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
          <LanguageProvider>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[160px] overflow-hidden z-0">
              <PageBackground />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto pt-[4.8rem] pb-24 sm:pt-[9.6rem] px-6">
              {children}
            </div>
            <Navbar />
          </LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
