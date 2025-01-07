// FloatingNavbar.tsx

import React from 'react';

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
}

export function FloatingNavbar({ navItems }: FloatingNavbarProps) {
  return (
    <div className="relative w-full">
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-sm">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
