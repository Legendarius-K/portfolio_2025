"use client";

interface NavigationProps {
  onClick: (menuItem: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
  const navItems = ["about", "work", "contact"];

  const handleNavClick = (menuItem: string) => {
    if (menuItem) {
      onClick(menuItem);
    }
  };

  return (
    <nav className="absolute top-10 md:w-1/2 border-[1px] border-black rounded-full px-6 py-2 flex justify-between text-xl">
      {navItems.map((item) => (
        <li
          key={item}
          className="list-none group relative w-max cursor-pointer"
        >
          <span onClick={() => handleNavClick(item)}>{item}</span>
          <span className="absolute bottom-0 left-0 w-0 transition-all h-[1px] bg-black group-hover:w-full"></span>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
