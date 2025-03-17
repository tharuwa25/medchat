import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingDock } from "@/components/ui/floating-dock";
const inter = Inter({ subsets: ["latin"] });

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
  {
    title: "Other",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ShootingStars/>
      <StarsBackground/>
      <div className="fixed bottom-10 left-0 right-0">
        <div className="flex items-center justify-center w-full">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
        {children}</body>
    </html>
  );
}
