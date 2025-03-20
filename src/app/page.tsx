"use client";

import About from "@/components/about";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/classNames";
import { useState } from "react";

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState<navigation>("about");

  return (
    <main className="relative flex justify-center items-center h-full overflow-hidden">
      <Navigation
        onClick={(menuItem: string) =>
          setActiveMenuItem(menuItem as navigation)
        }
      />

      <div
        className={cn(
          "absolute transition-transform duration-500 ease-in-out overflow-hidden",
          activeMenuItem === "about"
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        )}
      >
        <About />
      </div>
      <div
        className={cn(
          "absolute transition-transform duration-500 ease-in-out overflow-hidden",
          activeMenuItem === "work"
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <About />
      </div>
      <div
        className={cn(
          "absolute transition-transform duration-500 ease-in-out overflow-hidden",
          activeMenuItem === "contact"
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        )}
      >
        <About />
      </div>
    </main>
  );
}
