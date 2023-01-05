import Link from "next/link";
import { useRef, useState } from "react";
import { clsx } from "clsx";
import { NavbatItemWrapper } from "./NavbarItemWrapper";
import { useRouter } from "next/router";
import { useDetectOutsideClick } from "../hooks/useOutsideClick";

export interface NavbarItemBase {
  title: string;
  href: string;
}

export interface NavbarItemProps extends NavbarItemBase {
  subitems?: NavbarItemBase[];
}

const isCurrentRoute = (
  href: string,
  currentRoute: string,
  isSubitem?: boolean
) => {
  if (isSubitem) {
    return href === currentRoute;
  }

  const currentRoutePaths = currentRoute.slice(1).split("/");
  return currentRoutePaths.includes(href.slice(1));
};

export const NavbarItem = ({ href, title, subitems }: NavbarItemProps) => {
  const [showSubItems, setShowSubItems] = useState(false);
  const currentRoute = useRouter().pathname;
  const navbarItemRef = useRef(null);
  useDetectOutsideClick(navbarItemRef, () => setShowSubItems(false));

  return (
    <li
      ref={navbarItemRef}
      tabIndex={0}
      className="relative lg:h-full group text-xl lg:text-lg text-black lg:text-white font-medium before:content-[''] before:w-full before:r-0 before:l-0"
    >
      <NavbatItemWrapper
        href={href}
        subitems={subitems}
        setShowSubItems={setShowSubItems}
        showSubItems={showSubItems}
        classes={`lg:h-full flex items-center justify-center py-4 lg:py-0 ${
          isCurrentRoute(href, currentRoute) && "border-white border-t-4"
        }`}
      >
        {title}
      </NavbatItemWrapper>

      {subitems && (
        <ul
          className={clsx(
            "flex-col items-center justify-center text-center lg:absolute lg:translate-x-1/2 lg:right-1/2 top-[90%]",
            showSubItems ? "flex" : "hidden"
          )}
        >
          {subitems.map((subitem) => (
            <li key={subitem.href}>
              <Link
                className={clsx(
                  "block text-lg text-gray-500 lg:text-white lg:w-52 py-1 lg:py-2 px-4 lg:bg-[#000000] lg:bg-opacity-[85%] hover:lg:bg-opacity-100 transition-colors duration-300",
                  {
                    "border-white border-l-4": isCurrentRoute(
                      subitem.href,
                      currentRoute,
                      true
                    ),
                  }
                )}
                href={subitem.href}
              >
                {subitem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
