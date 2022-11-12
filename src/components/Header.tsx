import Link from "next/link";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="bg-primary-800">
      <div className="flex items-center justify-between mx-auto px-4 py-5 xl:container">
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
