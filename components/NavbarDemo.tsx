"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center bg-blue-800 justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State to toggle profile menu

  const handleMenuItemClick = (item: string) => {
    setActive(item);

    if (item === "PROFILE") {
      setShowProfileMenu((prev) => !prev); // Toggle the profile menu
    }
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-bold text-white", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">HOME</HoveredLink>
        <HoveredLink href="/chat">CHAT</HoveredLink>
        <HoveredLink href="/mychat">MY CHATS</HoveredLink>
        <HoveredLink href="/blog">BLOG</HoveredLink>
        <HoveredLink href="/contact">CONTACT</HoveredLink>

        {/* The Profile menu item that toggles additional options */}
        <MenuItem setActive={() => handleMenuItemClick("PROFILE")} active={active} item="PROFILE">
          <div className="flex flex-col space-y-4 text-sm">
            {showProfileMenu && (
              <>
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </>
            )}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
