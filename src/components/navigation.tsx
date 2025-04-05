"use client";

import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { name: "about", path: "/" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
    { name: "misc", path: "/misc" },
  ];

  return (
    <nav className="absolute top-5 md:top-10 w-[96%] md:w-[500px] border-[1px] border-gray-400 rounded-full px-6 py-2 flex justify-between text-xl">
      {navItems.map((item) => (
        <li
          key={item.name}
          className="list-none group relative w-max cursor-pointer"
        >
          <Link href={item.path}>{item.name}</Link>
          <span className="absolute bottom-0 left-0 w-0 transition-all h-[1px] bg-gray-400 group-hover:w-full"></span>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
