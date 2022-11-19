import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const MINIMUM_HEIGHT_TO_SHOW_SOLID_BACKGROUND = 200;

export const Header = () => {
  const [navbarSolidBackground, setNavbarSolidBackground] = useState(false);

  const handleScroll = useCallback((event: any) => {
    const { scrollTop } = event.srcElement.documentElement;
    if (scrollTop >= MINIMUM_HEIGHT_TO_SHOW_SOLID_BACKGROUND) {
      setNavbarSolidBackground(true);
    } else {
      setNavbarSolidBackground(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={clsx(
        "fixed z-[1000] w-full border-white border-b-[1px] transition-colors",
        {
          "bg-primary-900 border-transparent": navbarSolidBackground,
        }
      )}
    >
      <div className="flex items-center justify-between mx-auto px-4 py-5 xl:container xl:px-0">
        <h1>
          <Link href="/">
            <Logo />
          </Link>
        </h1>

        <Navbar />
      </div>
    </div>
  );
};
