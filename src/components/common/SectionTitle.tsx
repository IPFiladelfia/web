import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  className?: string;
  color?: "white" | "black";
}

export const SectionTitle = ({
  title,
  className,
  color = "black",
}: SectionTitleProps) => {
  return (
    <h2
      className={clsx(
        "text-4xl lg:text-5xl font-bold",
        className,
        `text-${color === "white" ? "white" : "grey-900"}`
      )}
    >
      {title}
    </h2>
  );
};
