import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      className="inline-block border-white border-2 font-medium text-white py-1 px-4 mt-2 hover:bg-white hover:text-black transition-colors"
      role="button"
      href={href}
    >
      {children}
    </Link>
  );
};
