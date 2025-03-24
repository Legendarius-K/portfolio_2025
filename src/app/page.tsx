"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Misc from "@/components/misc";
import Navigation from "@/components/navigation";
import Work from "@/components/work";
import { cn } from "@/lib/classNames";
import { NavigationType } from "@/utils/types";
import { useState } from "react";

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState<NavigationType>("about");

  return (
    <main className="flex justify-center min-h-full pt-28 md:pt-44 pb-24 px-1">
      <Navigation
        onClick={(menuItem: string) =>
          setActiveMenuItem(menuItem as NavigationType)
        }
      />

      <div
        className={cn(
          "",
          activeMenuItem === "about" ? "opacity-100" : "opacity-0 hidden"
        )}
      >
        <About onClick={() => setActiveMenuItem('contact')}/>
      </div>
      <div
        className={cn(
          "",
          activeMenuItem === "work" ? "opacity-100" : "opacity-0 hidden"
        )}
      >
        <Work />
      </div>
      <div
        className={cn(
          "",
          activeMenuItem === "contact" ? "opacity-100" : "opacity-0 hidden"
        )}
      >
        <Contact />
      </div>
      <div
        className={cn(
          "",
          activeMenuItem === "misc" ? "opacity-100" : "opacity-0 hidden"
        )}
      >
        <Misc />
      </div>
    </main>
  );
}
