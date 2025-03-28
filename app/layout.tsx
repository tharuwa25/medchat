import type { Metadata } from "next";
import "../styles/globals.css";
import {
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export const metadata: Metadata = {
  title: "Medchat",
  description: "Your symptoms, analyzed instantly.",
};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://tharuwa25.github.io/medchat",
  },

  {
    title: "Find Symptom",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://tharuwa25.github.io/medchat/find-symptom",
  },
  {
    title: "How it work",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://tharuwa25.github.io/medchat/help",
  },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>

        <div className="fixed bottom-10 left-0 right-0 z-50"> {/* Add z-index here */}
          <div className="flex items-center justify-center w-full">
            <FloatingDock
              mobileClassName="translate-y-20" // only for demo, remove for production
              items={links}
            />
          </div>
        </div>

        <main className="main">{children}</main>
        
      </body>
    </html>
  );
}
