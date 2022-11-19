import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2 className={clsx("text-4xl lg:text-5xl font-bold", className)}>
      {title}
    </h2>
  );
};
