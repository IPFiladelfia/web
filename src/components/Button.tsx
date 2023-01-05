import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  variation?: "LIGHT" | "DARK";
  className?: string;
}

export const Button = ({
  href,
  children,
  text,
  onClick,
  variation = "LIGHT",
  className,
}: ButtonProps) => {
  const buttonClasses = clsx(
    `inline-block self-start border-2 font-semibold py-1 px-4 mt-2  transition-colors`,
    className,
    {
      "border-white text-white bg-black hover:border-black hover:bg-white hover:text-black":
        variation === "LIGHT",
    },
    {
      "border-black text-black hover:bg-black hover:text-white":
        variation === "DARK",
    }
  );

  if (href) {
    return (
      <Link className={buttonClasses} role="link" href={href}>
        {text ?? children}{" "}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text ?? children}
    </button>
  );
};
