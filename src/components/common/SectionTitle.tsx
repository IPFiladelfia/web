import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  className?: string;
  color?: "white" | "black";
}

export const SectionTitle = ({
  title,
  className,
  color = "white",
}: SectionTitleProps) => {
  return (
    <h2
      className={clsx(
        "text-4xl lg:text-5xl font-bold",
        className,
        `text-${color}`
      )}
    >
      {title}
    </h2>
  );
};
