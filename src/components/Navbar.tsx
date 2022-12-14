import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { NavbarItem, NavbarItemProps } from "./NavbarItem";
import { clsx } from "clsx";
import { useRouter } from "next/router";

const fullConfig = resolveConfig(tailwindConfig);

const navItems: NavbarItemProps[] = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "A Igreja",
    href: "/igreja",
    subitems: [
      {
        title: "Quem somos",
        href: "/igreja/quem-somos",
      },
      {
        title: "Nossa equipe",
        href: "/igreja/nossa-equipe",
      },
      {
        title: "Redes e Projetos",
        href: "/igreja/redes-e-projetos",
      },
    ],
  },
  {
    title: "Agenda",
    href: "/agenda",
  },
  {
    title: "Contribuições",
    href: "/contribuicoes",
  },
  {
    title: "Pedidos de Oração",
    href: "/pedidos-de-oracao",
  },
];

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();
  const primaryColorSpectre = fullConfig.theme?.colors?.primary;
  const primaryColor = primaryColorSpectre["900"];

  useEffect(() => {
    router.events.on("routeChangeComplete", function () {
      setIsNavbarOpen(false);
    });
  }, [router.events]);

  return (
    <>
      <ul
        role="navbar"
        className={clsx(
          "bg-white lg:h-full lg:bg-transparent fixed lg:relative inset-0 items-center justify-center flex-col z-[1000] text-center lg:flex lg:flex-row lg:gap-6",
          isNavbarOpen ? "flex" : "hidden"
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
          onToggle={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      </div>
    </>
  );
};
