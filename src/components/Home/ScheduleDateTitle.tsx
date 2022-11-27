import clsx from "clsx";

interface ScheduleDateTitleProps {
  title: string;
  className?: string;
}

export const ScheduleDateTitle = ({
  title,
  className,
}: ScheduleDateTitleProps) => {
  return (
    <h3
      className={clsx(
        "text-2xl text-grey-900 font-semibold italic after:content-[''] after:w-full relative after:h-3 after:bg-secondary after:absolute after:bottom-0 after:left-0 inline-block after:-z-[1] after:opacity-70",
        className
      )}
    >
      {title}
    </h3>
  );
};
