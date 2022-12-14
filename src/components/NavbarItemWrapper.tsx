import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { NavbarItemBase } from "./NavbarItem";

interface NavtabItemWrapperProps {
  children: React.ReactNode;
  href: string;
  subitems?: NavbarItemBase[];
  setShowSubItems: React.Dispatch<React.SetStateAction<boolean>>;
  showSubItems: boolean;
  classes?: string;
}

const classesNavItem = "inline-block";

export const NavbatItemWrapper = ({
  children,
  href,
  subitems,
  setShowSubItems,
  showSubItems,
  classes,
}: NavtabItemWrapperProps) => {
  if (subitems)
    return (
      <span
        className={clsx(classes, classesNavItem)}
        onClick={() => setShowSubItems(!showSubItems)}
        role="button"
      >
        {children}
      </span>
    );
  return (
    <Link className={clsx(classes, classesNavItem)} href={href}>
      {children}
    </Link>
  );
};
