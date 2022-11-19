import clsx from "clsx";

interface PageTitleProps {
  title: string;
  className?: string;
}

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <h3
      className={clsx(
        "text-3xl lg:text-4xl font-bold text-grey-900 mb-8",
        className
      )}
    >
      {title}
    </h3>
  );
};
