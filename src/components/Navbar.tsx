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
    subitems: [
      {
        title: "Quem somos",
        href: "/quem-somos",
      },
      {
        title: "Nossa equipe",
        href: "/nossa-equipe",
      },
      {
        title: "Redes e Projetos",
        href: "/",
      },
    ],
  },
  {
    title: "Agenda",
    href: "/agenda",
  },
  {
    title: "Contribuição",
    href: "/",
  },
  {
    title: "Pedidos de Oração",
    href: "/",
  },
  // {
  //   title: "Onde nos encontrar",
  //   href: "/",
  // },
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
          `fixed
          top-0
          left-0
          right-0
          bottom-0
          bg-white
          lg:bg-transparent
          flex
          flex-col
          items-center
          justify-center
          text-center
          text-grey-600
          font-medium
          gap-8
          text-xl
          lg:flex
          lg:relative
          lg:flex-row
          lg:text-white
          lg:gap-12`,
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
