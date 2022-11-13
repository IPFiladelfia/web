import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variation?: "LIGHT" | "DARK";
  className?: string;
}

export const Button = ({
  href,
  children,
  variation = "LIGHT",
  className,
}: ButtonProps) => {
  return (
    <Link
      className={clsx(
        `inline-block self-start border-2 font-semibold py-1 px-4 mt-2  transition-colors`,
        className,
        {
          "border-white text-white hover:bg-white hover:text-black":
            variation === "LIGHT",
        },
        {
          "border-black text-black hover:bg-black hover:text-white":
            variation === "DARK",
        }
      )}
      role="link"
      href={href}
    >
      {children}
    </Link>
  );
};
