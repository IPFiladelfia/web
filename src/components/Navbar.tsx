import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavbarItem, NavbarItemProps } from "./NavbarItem";
import { clsx } from "clsx";

const fullConfig = resolveConfig(tailwindConfig);

const navItems: NavbarItemProps[] = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "A Igreja",
    href: "/",
    // subitems: [
    //   {
    //     title: "Crenças",
    //     href: "/",
    //   },
    //   {
    //     title: "Visão e Valores",
    //     href: "/",
    //   },
    //   {
    //     title: "Equipe",
    //     href: "/",
    //   },
    //   {
    //     title: "Redes e Projetos",
    //     href: "/",
    //   },
    // ],
  },
  {
    title: "Agenda",
    href: "/",
  },
  {
    title: "Contribuição",
    href: "/",
  },
  {
    title: "Pedidos de Oração",
    href: "/",
  },
  {
    title: "Onde nos encontrar",
    href: "/",
  },
];

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const primaryColorSpectre = fullConfig.theme?.colors?.primary;
  const primaryColor = primaryColorSpectre["900"];

  return (
    <>
      <ul
        role="navbar"
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 bg-white lg:bg-transparent flex flex-col items-center justify-center text-center text-grey-600 font-medium gap-4 text-xl lg:flex lg:relative lg:flex-row lg:text-base lg:text-white lg:gap-6",
          { hidden: !isNavbarOpen }
        )}
      >
        {navItems.map((item) => (
          <NavbarItem key={item.href} {...item} />
        ))}
      </ul>

      <div className="lg:hidden z-[1001]">
        <Hamburger
          color={isNavbarOpen ? primaryColor : "white"}
          toggled={isNavbarOpen}
          onToggle={toggleNavbar}
        />
      </div>
    </>
  );
};
