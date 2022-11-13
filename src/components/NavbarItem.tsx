import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

interface NavbarItemBase {
  title: string;
  href: string;
}

export interface NavbarItemProps extends NavbarItemBase {
  subitems?: NavbarItemBase[];
}

interface NavtabItemWrapperProps {
  children: React.ReactNode;
  href: string;
  subitems?: NavbarItemBase[];
  setShowSubItems: React.Dispatch<React.SetStateAction<boolean>>;
  showSubItems: boolean;
  className: string;
}

const NavbatItemWrapper = ({
  children,
  href,
  subitems,
  setShowSubItems,
  showSubItems,
  className,
}: NavtabItemWrapperProps) => {
  if (subitems)
    return (
      <span
        className={className}
        onClick={() => setShowSubItems(!showSubItems)}
        role="button"
      >
        {children}
      </span>
    );
  return <Link href={href}>{children}</Link>;
};

export const NavbarItem = ({ href, title, subitems }: NavbarItemProps) => {
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <li className="relative [&>ul]:hover:flex [&>span]:hover:after:rotate-[45deg] font-semibold">
      <NavbatItemWrapper
        href={href}
        subitems={subitems}
        setShowSubItems={setShowSubItems}
        showSubItems={showSubItems}
        className={clsx("relative", {
          "after:content-['+'] after:bg-red after:absolute after:top-[50%] after:translate-y-[-50%] after:-right-4 transition-transform ease-linear mr-2":
            subitems,
        })}
      >
        {title}
      </NavbatItemWrapper>

      {subitems && (
        <ul
          className={clsx(
            `text-base hidden flex-col gap-2 text-grey-400 mt-2 overflow-hidden lg:m-0 lg:absolute lg:pt-4 lg:left-[50%] lg:translate-x-[-50%] lg:h-auto lg:text-white lg:gap-0 lg:hover:flex`
          )}
        >
          {subitems.map((subitem) => (
            <li key={subitem.href}>
              <Link
                className="lg:whitespace-nowrap lg:block lg:py-2 lg:px-8 lg:bg-primary-900"
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