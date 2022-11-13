import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <div className={clsx("container mx-auto py-24 px-4", className)}>
      {children}
    </div>
  );
};
